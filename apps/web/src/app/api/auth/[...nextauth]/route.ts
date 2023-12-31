import { ROUTES } from "@/config/routes";
import { apiFetch } from "@/utils/apiFetch";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials) {
        const res = await apiFetch(ROUTES.apiSignIn, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const user = await res.json();

        if (!res.ok || !user) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }

      return token;
    },

    async session({ session, token }) {
      session.tokens = token.tokens;
      session.user = token.user;

      return session;
    },
  },
  pages: {
    signIn: ROUTES.signIn,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
