"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import { User } from "@/interfaces/user";
import { apiFetch } from "@/utils/apiFetch";
import { getServerSession } from "next-auth";

export const getUserInfo = async (): Promise<User> => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(RoutePaths.userInfo, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.tokens.access_token}`,
    },
    next: {
      tags: ["bet", "limit"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch user info");
  }

  return res.json();
};
