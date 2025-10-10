import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Credenciais inválidas')
        }

        // Aqui você implementará a lógica de verificação do usuário
        // Por enquanto, vamos usar um usuário de teste
        const testUser = {
          id: "1",
          name: "Usuário Teste",
          email: "teste@example.com",
          password: await bcrypt.hash("senha123", 10)
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          testUser.password
        )

        if (isValid) {
          return {
            id: testUser.id,
            name: testUser.name,
            email: testUser.email
          }
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
    signUp: '/cadastro',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub
      return session
    },
  },
}
