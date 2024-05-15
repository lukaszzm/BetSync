import { z } from "zod";

export const newBetSchema = z.object({
  bookmakerId: z.string(),
  link: z.string().url(),
});

export type NewBetValues = z.infer<typeof newBetSchema>;
