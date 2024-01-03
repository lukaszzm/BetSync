import { Button } from "@ui/components/button";
import { LastBetsTable } from "./LastBetsTable";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { ArrowRight } from "lucide-react";
import { LastBetsSkeleton } from "./LastBetsSkeleton";
import { Suspense } from "react";

export const LastBets = () => {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-semibold">Last Bets:</h1>

      <Suspense fallback={<LastBetsSkeleton />}>
        <LastBetsTable />
      </Suspense>

      <Button asChild className="w-full flex gap-2" variant="ghost">
        <Link href={ROUTES.bets}>
          See all bets
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
};
