"use server";

import { authOptions } from "@/config/auth";
import { ROUTES } from "@/config/routes";
import { ServerAction } from "@/interfaces/server-action";
import type { NewBetValues } from "@/schemas/newBetSchema";
import { apiFetch } from "@/utils/apiFetch";
import { getApiError } from "@/utils/getApiError";
import { getServerSession } from "next-auth";

export const addNewBet: ServerAction<NewBetValues, string> = async values => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(ROUTES.bet, {
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

  return {
    ok: true,
    data: "Bet added successfully!",
  };
};
