import { Suspense } from "react";
import { Skeleton } from "@ui/components/skeleton";
import { NewBetContent } from "./NewBetContent";

export const NewBet = () => {
  return (
    <Suspense fallback={<Skeleton className="w-40 h-12" />}>
      <NewBetContent />
    </Suspense>
  );
};
