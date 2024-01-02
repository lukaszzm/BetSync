import { BetStatus } from "@/config/betStatus";

export interface Bet {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  bookmakerId: string;
  stake: number;
  potentialReturn: number;
  status: BetStatus;
  prize: number;
  link: string;
}
