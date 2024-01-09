"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import type { BetWithBookmaker } from "@/interfaces/bet";
import type { PaginationResponse } from "@/interfaces/pagination-response";
import { apiFetch } from "@/utils/apiFetch";
import { getServerSession } from "next-auth";

type QueryParams = {
  order?: "asc" | "desc";
  page?: number;
  perPage?: number;
  status?: "pending" | "won" | "lost";
  bookmakerId?: string;
};

export const getBets = async (params?: QueryParams): Promise<PaginationResponse<BetWithBookmaker>> => {
  const session = await getServerSession(authOptions);

  const queryParams = new URLSearchParams(params as Record<string, string>);

  const res = await apiFetch(`${RoutePaths.bet}?${queryParams}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.tokens.access_token}`,
    },
    next: {
      tags: ["bet"],
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching bets");
  }

  const data = await res.json();
  return data;
};
