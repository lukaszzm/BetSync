import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
    };
    tokens: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
    };
    tokens: {
      access_token: string;
      refresh_token: string;
      expiresIn: number;
    };
    error?: string;
  }
}
