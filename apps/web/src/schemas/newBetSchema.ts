import { BetStatus } from "@/config/betStatus";
import { z } from "zod";

export const newBetSchema = z.object({
  link: z.string().url(),
  bookmakerId: z.string(),
  stake: z.coerce.number().positive(),
  potentialReturn: z.coerce.number().positive(),
  status: z.nativeEnum(BetStatus).optional(),
});

export type NewBetValues = z.infer<typeof newBetSchema>;
