import { BetStatus } from "@/config/betStatus";
import type { Bookmaker } from "./bookmaker";

export interface Bet {
  id: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  bookmakerId: string;
  stake: number;
  win: number;
  status: BetStatus;
  link: string;
}

export interface BetWithBookmaker extends Bet {
  bookmaker: Bookmaker;
}
