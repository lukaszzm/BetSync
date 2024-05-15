import { toCurrencyString } from "@/utils/toCurrencyString";
import { Alert, AlertDescription } from "@ui/components/ui/alert";

interface UserLimitsCurrentInfoProps {
  currentLimit: number | null;
}

export const UserLimitsCurrentInfo = ({ currentLimit }: UserLimitsCurrentInfoProps) => {
  if (!currentLimit) {
    return null;
  }

  return (
    <Alert variant="info">
      <AlertDescription>
        Your current limit: <span className="italic">{toCurrencyString(currentLimit)}</span>
      </AlertDescription>
    </Alert>
  );
};
