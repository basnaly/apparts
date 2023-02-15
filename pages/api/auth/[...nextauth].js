import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import validatePassword from "@/lib/validatePassword";
import checkUserExists from "@/lib/checkUserExists";
import createUser from "@/lib/createUser";
import verifyPassword from "@/lib/verifyPassword";

export default NextAuth({
	site: process.env.NEXTAUTH_URL,
	session: {
		jwt: true,
	},
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
});
