import { ROUTES } from "@/config/routes";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BetsSearchParams } from "@/interfaces/search-params";
import { BetsFilters } from "@/components/Bets/BetsFilters";
import { Suspense } from "react";
import { BetsFiltersSkeleton } from "@/components/Bets/BetsFilters/BetsFiltersSkeleton";
import { BetsTableSkeleton } from "@/components/Bets/BetsTable/BetsTableSkeleton";
import { BetsFilteredTable } from "@/components/Bets/BetsFilteredTable";

type PageProps = {
  searchParams: BetsSearchParams;
};

export default function DashboardBetsPage({ searchParams }: PageProps) {
  return (
    <>
      <Button asChild variant="ghost" size="icon" className="mr-auto">
        <Link href={ROUTES.dashboard} aria-label="Back to dashboard">
          <ArrowLeft className="w-8 h-8" />
        </Link>
      </Button>
      <Suspense fallback={<BetsFiltersSkeleton />}>
        <BetsFilters {...searchParams} />
      </Suspense>

      <Suspense fallback={<BetsTableSkeleton />}>
        <BetsFilteredTable {...searchParams} />
      </Suspense>
    </>
  );
}
