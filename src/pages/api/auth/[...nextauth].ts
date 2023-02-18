import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '../../../lib/db'
import { comparePassword } from '@/utils/passwordHash'

// const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@gmail.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const email = credentials?.email
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const password = credentials!.password

        const user = await prisma.user.findUnique({ where: { email } })

        // Email Not found
        if (!user) {
          throw new Error('E-mail não está cadastrado')
        }

        // Check hased password with DB hashed password
        const isPasswordCorrect = await comparePassword(password, user.password)

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error('Senha incorreta')
        }

        return user
      }
    })
  ],
  pages: {
    signIn: '/dashboard'
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token
      return session
    }
  }
}

export default NextAuth(authOptions)
