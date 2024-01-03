import { LastBets } from "@/components/LastBets";
import { LimitWarning } from "@/components/LimitWarning";
import { Summary } from "@/components/Summary";

export default function DashboardPage() {
  return (
    <>
      <LimitWarning />
      <Summary />
      <LastBets />
    </>
  );
}
