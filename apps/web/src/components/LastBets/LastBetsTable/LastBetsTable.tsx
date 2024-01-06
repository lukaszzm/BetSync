import { getBets } from "@/actions/bet/get-bets";
import { BetsTable } from "@/components/Bets/BetsTable";
import { ROUTES } from "@/config/routes";
import { Button } from "@ui/components/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const LastBetsTable = async () => {
  const res = await getBets({ perPage: 5 });
  const bets = res.data;

  const betsCount = res.meta.total;

  return (
    <>
      <BetsTable bets={bets} />
      {betsCount > 5 && (
        <Button asChild className="w-full flex gap-2" variant="ghost">
          <Link href={ROUTES.bets}>
            See all bets
            <ArrowRight />
          </Link>
        </Button>
      )}
    </>
  );
};
