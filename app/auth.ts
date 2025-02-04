import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { authenticateUser, validateUserInput } from '../lib/auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'string', required: true },
        password: { label: 'Password', type: 'string', required: true }
      },

      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required');
          }

          await validateUserInput(email, password);
          const user = await authenticateUser(email, password);
          return user;
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
    }),

  ],
  pages: {
    signIn: '/auth/signin',
    newUser: '/'
  },
  callbacks: {
    async signIn({ user, credentials, account }: any) {
      try {
        if (!user) {
          throw new Error('user not found,please check your credentials...')
        }
        return user
      } catch (error: any) {
        console.error('Signin Error:', error.message);
        return false
      }

    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    // Expose user ID in session
    async session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
})