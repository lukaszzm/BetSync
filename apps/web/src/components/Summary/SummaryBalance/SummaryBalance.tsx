import { PreviewCard } from "@ui/components/preview-card";

interface SummaryBalanceProps {
  balance: number;
}

const getVariant = (balance: number) => {
  switch (true) {
    case balance > 0:
      return "success";
    case balance < 0:
      return "destructive";
    default:
      return "default";
  }
};

export const SummaryBalance = ({ balance }: SummaryBalanceProps) => {
  const variant = getVariant(balance);

  return (
    <PreviewCard variant={variant} label="Balance: ">
      {balance}
    </PreviewCard>
  );
};
