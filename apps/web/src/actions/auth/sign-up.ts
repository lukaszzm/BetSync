"use server";

import { ROUTES } from "@/config/routes";
import { DEFAULT_ERROR_MESSAGE } from "@/constants";
import { ServerAction } from "@/interfaces/server-action";
import { SignUpValues } from "@/schemas/signUpSchema";
import { apiFetch } from "@/utils/apiFetch";

export const signUp: ServerAction<SignUpValues, string> = async values => {
  const res = await apiFetch(ROUTES.apiSignUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    const data = await res.json();
    return { ok: false, error: data.message ?? DEFAULT_ERROR_MESSAGE };
  }

  return { ok: true, data: "Success" };
};
