"use server";

import { RoutePaths } from "@/config/routes";
import { ServerAction } from "@/interfaces/server-action";
import { SignUpValues } from "@/schemas/signUpSchema";
import { apiFetch } from "@/utils/apiFetch";
import { getApiError } from "@/utils/getApiError";

export const signUp: ServerAction<SignUpValues, string> = async values => {
  const res = await apiFetch(RoutePaths.apiSignUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    return { ok: false, error: await getApiError(res) };
  }

  return { ok: true, data: "Success" };
};
