"use server";

import { authOptions } from "@/config/auth";
import { RoutePaths } from "@/config/routes";
import { ServerAction } from "@/interfaces/server-action";
import { UserLimitValues } from "@/schemas/userLimitSchema";
import { apiFetch } from "@/utils/apiFetch";
import { getApiError } from "@/utils/getApiError";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const setUserLimit: ServerAction<UserLimitValues, string> = async values => {
  const session = await getServerSession(authOptions);

  const res = await apiFetch(RoutePaths.userLimit, {
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

  revalidateTag("limit");

  return {
    ok: true,
    data: "Your limit has been updated successfully!",
  };
};
