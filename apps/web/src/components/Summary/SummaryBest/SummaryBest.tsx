import type { Bet } from "@/interfaces/bet";
import { PreviewCard } from "@ui/components/preview-card";

interface SummaryBestProps {
  bestBet: Bet | null;
}

export const SummaryBest = async ({ bestBet }: SummaryBestProps) => {
  return <PreviewCard label="The Highest Win: ">{bestBet?.prize ?? "-"}</PreviewCard>;
};
