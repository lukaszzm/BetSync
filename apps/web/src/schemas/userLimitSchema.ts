import { z } from "zod";

export const userLimitSchema = z.object({
  limit: z.coerce.number().positive(),
});

export type UserLimitValues = z.infer<typeof userLimitSchema>;
