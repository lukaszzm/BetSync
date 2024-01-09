"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import type { Bet } from "@/interfaces/bet";
import { apiFetch } from "@/utils/apiFetch";
import { getServerSession } from "next-auth";

export const getBestBet = async (): Promise<Bet | null> => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(RoutePaths.best, {
    method: "GET",
    headers: {
      authorization: `Bearer ${session?.tokens.access_token}`,
    },
    next: {
      tags: ["bet"],
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
