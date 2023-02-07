import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'

console.log(process.env.GITHUB_ID)
export default NextAuth({
    site: process.env.NEXTAUTH_URL,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ]
})