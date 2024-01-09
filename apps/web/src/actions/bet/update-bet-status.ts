"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import { ServerAction } from "@/interfaces/server-action";
import { apiFetch } from "@/utils/apiFetch";
import { getApiError } from "@/utils/getApiError";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

interface ActionValues {
  id: string;
  status: string;
}

export const updateBetStatus: ServerAction<ActionValues, string> = async values => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(RoutePaths.updateStatus, {
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
    data: "Status of the bet has been updated",
  };
};
