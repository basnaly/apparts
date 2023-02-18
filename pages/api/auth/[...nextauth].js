import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import validatePassword from "@/lib/validatePassword";
import checkUserExists from "@/lib/checkUserExists";
import createUser from "@/lib/createUser";
import verifyPassword from "@/lib/verifyPassword";
import { pool } from "@/lib/sqldb";

export default NextAuth({
	site: process.env.NEXTAUTH_URL,
	pages: {
		// $signIn: '/sign-in',
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
	callbacks: {
		async jwt({token, user, profile}) {
			if (user) {
				token.role = user.role || profile.local_role
			}
			return token
		},
		async session({session, token}) {
			if (token) {
				session.user.role = token.role
			}
			
			// console.log(session.user)
			return session
		}
	},
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
			profile: async (profile) => {
				const isUserExists = await checkUserExists(
					profile.email
				);
				if (!isUserExists) {
					await createUser(profile.email, profile.login, "")
				}
				else {
					const local_user = await pool.query(`SELECT * FROM local_users WHERE email = '${profile.email}'`);
					profile.local_role = local_user.rows[0].role
				}
				return profile
			},
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			profile: async (profile) => {
				const isUserExists = await checkUserExists(
					profile.email
				);
				if (!isUserExists) {
				await createUser(profile.email, profile.login, "")
				}
				else {
					const local_user = await pool.query(`SELECT * FROM local_users WHERE email = '${profile.email}'`);
					profile.local_role = local_user.rows[0].role
				}
				profile.id = profile.email
				return profile
			}
		}),

		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				name: { label: "Name", type: "text" },
				password: { label: "Password", type: "password" },
				isLogin: {
					label: "Login",
					type: "radio",
					name: "isLogin",
					value: "login",
				},
				isRegister: {
					label: "Register",
					type: "radio",
					name: "isLogin",
					value: "register",
				},
			},
			async authorize(credentials, req) {
				console.log(credentials);

				if (credentials.isLogin === "login") {
					return await verifyPassword(
						credentials.email,
						credentials.password
					);
				} else {
					validatePassword(credentials.password);
					const isUserExists = await checkUserExists(
						credentials.email
					);
					if (isUserExists) {
						throw new Error("User exists");
					}
					return await createUser(
						credentials.email,
						credentials.name,
						credentials.password
					);
				}
			},
		}),
	],
	// adapter: PostgresAdapter(pool)
});
