import { getUserInfo } from "@/actions/user/get-user-info";
import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Progress } from "@ui/components/progress";

const BOTTOM_LEVEL = 0.7;

export const LimitWarningAlert = async () => {
  const { balance, limit } = await getUserInfo();

  const currentLevel = limit && balance < 0 ? Math.abs(balance) / limit : 0;

  if (currentLevel < BOTTOM_LEVEL) {
    return null;
  }

  const fixedLevel = currentLevel * 100;

  return (
    <Alert variant="info" className="space-y-2">
      <AlertTitle>Important!</AlertTitle>
      <AlertDescription>Your balance is {fixedLevel.toFixed(2)}% of your limit. Please consider to stop betting.</AlertDescription>
      <Progress value={fixedLevel} aria-label="Percentage of current balance to the limit" />
    </Alert>
  );
};
