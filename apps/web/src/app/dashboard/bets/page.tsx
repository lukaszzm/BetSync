import { BetsWithPagination } from "@/components/Bets/BetsWithPagination";
import { BetsSearchParams } from "@/interfaces/search-params";
import { FormSkeleton } from "@ui/components/ui/skeletons/form-skeleton";
import { Suspense } from "react";
import { BetsFilters } from "@/components/Bets/BetsFilters";
import { BetsFiltersSkeleton } from "@/components/Bets/BetsFilters/BetsFiltersSkeleton";

interface PageProps {
  searchParams: BetsSearchParams;
}

export default function BetsPage({ searchParams }: PageProps) {
  return (
    <>
      <div className="w-full flex-col sm:flex-row flex gap-4 sm:items-end">
        <Suspense fallback={<BetsFiltersSkeleton />}>
          <BetsFilters />
        </Suspense>
      </div>
      <Suspense fallback={<FormSkeleton columns={7} rows={5} />}>
        <BetsWithPagination searchParams={searchParams} />
      </Suspense>
    </>
  );
}
