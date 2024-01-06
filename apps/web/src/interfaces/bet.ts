import { BetStatus } from "@/config/betStatus";
import type { Bookmaker } from "./bookmaker";

export interface Bet {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  bookmakerId: string;
  stake: number;
  potentialReturn: number;
  status: BetStatus;
  prize: number;
}

export interface BetWithBookmaker extends Bet {
  bookmaker: Bookmaker;
}
