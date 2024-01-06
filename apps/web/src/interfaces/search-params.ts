import { BetStatus } from "@/config/betStatus";

export interface BetsSearchParams {
  status?: BetStatus;
  bookmakerId?: string;
  order?: "asc" | "desc";
  page?: number;
}
