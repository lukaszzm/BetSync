import { getBookmakers } from "@/actions/bookmaker/get-bookmakers";
import { BetsFiltersBookmaker } from "@/components/Bets/BetsFilters/BetsFiltersBookmaker";
import { BetsFiltersClearAll } from "@/components/Bets/BetsFilters/BetsFiltersClearAll";
import { BetsFiltersOrder } from "@/components/Bets/BetsFilters/BetsFiltersOrder";
import { BetsFiltersStatus } from "@/components/Bets/BetsFilters/BetsFiltersStatus";

export default async function BetsFiltersPage() {
  const bookmakers = await getBookmakers();

  return (
    <div className="w-full flex-col sm:flex-row flex gap-4 sm:items-end">
      <BetsFiltersStatus />
      <BetsFiltersBookmaker bookmakers={bookmakers} />
      <BetsFiltersOrder />
      <BetsFiltersClearAll />
    </div>
  );
}
