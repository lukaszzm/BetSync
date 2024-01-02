"use server";

import { ROUTES } from "@/config/routes";
import { DEFAULT_ERROR_MESSAGE } from "@/constants";
import { SignUpValues } from "@/schemas/signUpSchema";
import { apiFetch } from "@/utils/apiFetch";

type SignUpResponse =
  | {
      ok: true;
    }
  | {
      ok: false;
      message: string;
    };

export const signUp = async (values: SignUpValues): Promise<SignUpResponse> => {
  const res = await apiFetch(ROUTES.apiSignUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!res.ok) {
    const data = await res.json();
    return { ok: false, message: data.message ?? DEFAULT_ERROR_MESSAGE };
  }

  return { ok: true };
};
