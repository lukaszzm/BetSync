import type { Bet } from "@/interfaces/bet";
import { PreviewCard } from "@ui/components/preview-card";

interface SummaryLastProps {
  lastBet: Bet | null;
}

const getVariant = (status: string | undefined) => {
  switch (status) {
    case "won":
      return "success";
    case "lost":
      return "destructive";
    default:
      return "default";
  }
};

export const SummaryLast = ({ lastBet }: SummaryLastProps) => {
  const variant = getVariant(lastBet?.status);

  return (
    <PreviewCard variant={variant} label="Last Bet: ">
      {lastBet?.status ?? "-"}
    </PreviewCard>
  );
};
