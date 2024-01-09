import { SummarySkeleton } from "./SummarySkeleton";
import { SummaryContent } from "./SummaryContent";
import { Suspense } from "react";

export const Summary = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4">
      <Suspense fallback={<SummarySkeleton />}>
        <SummaryContent />
      </Suspense>
    </div>
  );
};
