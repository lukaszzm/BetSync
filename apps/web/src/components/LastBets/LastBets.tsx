import { LastBetsTable } from "./LastBetsTable";
import { Suspense } from "react";
import { BetsTableSkeleton } from "../Bets/BetsTable/BetsTableSkeleton";

export const LastBets = () => {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-semibold">Last Bets:</h1>

      <Suspense fallback={<BetsTableSkeleton />}>
        <LastBetsTable />
      </Suspense>
    </div>
  );
};
