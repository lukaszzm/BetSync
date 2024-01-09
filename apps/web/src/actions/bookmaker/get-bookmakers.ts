"use server";

import { RoutePaths } from "@/config/routes";
import { Bookmaker } from "@/interfaces/bookmaker";
import { apiFetch } from "@/utils/apiFetch";

export const getBookmakers = async (): Promise<Bookmaker[]> => {
  const res = await apiFetch(RoutePaths.bookmaker);

  if (!res.ok) {
    throw new Error("Error while fetching bookmakers");
  }

  return res.json();
};
