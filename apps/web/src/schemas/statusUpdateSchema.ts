import { BetStatus } from "@/config/betStatus";
import { z } from "zod";

export const statusUpdateSchema = z.object({
  status: z.nativeEnum(BetStatus),
});

export type StatusUpdateValues = z.infer<typeof statusUpdateSchema>;
