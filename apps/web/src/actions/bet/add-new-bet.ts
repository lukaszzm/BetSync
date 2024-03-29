"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import { ServerAction } from "@/interfaces/server-action";
import type { NewBetValues } from "@/schemas/newBetSchema";
import { apiFetch } from "@/utils/apiFetch";
import { getApiError } from "@/utils/getApiError";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const addNewBet: ServerAction<NewBetValues, string> = async values => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(RoutePaths.bet, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.tokens.access_token}`,
    },
  });

  if (!res.ok) {
    return {
      ok: false,
      error: await getApiError(res),
    };
  }

  revalidateTag("bet");

  return {
    ok: true,
    data: "Bet added successfully!",
  };
};
