import type { Bet } from "@/interfaces/bet";
import { toCurrencyString } from "@/utils/toCurrencyString";
import { PreviewCard } from "@ui/components/preview-card";

interface SummaryBestProps {
  bestBet: Bet | null;
}

export const SummaryBest = async ({ bestBet }: SummaryBestProps) => {
  const content = bestBet ? toCurrencyString(bestBet.win) : "-";

  return <PreviewCard label="The Highest Win: ">{content}</PreviewCard>;
};
