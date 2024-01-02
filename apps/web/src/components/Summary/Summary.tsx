import { SummarySkeleton } from "./SummarySkeleton";
import { SummaryContent } from "./SummaryContent";
import { Suspense } from "react";

export const Summary = () => {
  return (
    <div className="flex w-full gap-4 max-w-5xl">
      <Suspense fallback={<SummarySkeleton />}>
        <SummaryContent />
      </Suspense>
    </div>
  );
};
