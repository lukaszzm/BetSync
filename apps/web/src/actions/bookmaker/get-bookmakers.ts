"use server";

import { ROUTES } from "@/config/routes";
import { Bookmaker } from "@/interfaces/bookmaker";
import { apiFetch } from "@/utils/apiFetch";

export const getAllBookmakers = async (): Promise<Bookmaker[]> => {
  const res = await apiFetch(ROUTES.bookmaker);

  if (!res.ok) {
    throw new Error("Error while fetching bookmakers");
  }

  return res.json();
};
