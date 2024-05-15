import { z } from "zod";
import { currencySchema } from "./currencySchema";

export const userLimitSchema = z.object({
  limit: currencySchema,
});

export type UserLimitValues = z.infer<typeof userLimitSchema>;
