import { BetsSearchParams } from "@/interfaces/search-params";
import { BetsFiltersStatus } from "./BetsFiltersStatus";
import { BetsFiltersOrder } from "./BetsFiltersOrder";
import { BetsFiltersBookmaker } from "./BetsFiltersBookmaker";
import { getBookmakers } from "@/actions/bookmaker/get-bookmakers";
import { BetsFiltersClearAll } from "./BetsFiltersClearAll";

interface BetsFiltersProps extends Omit<BetsSearchParams, "page"> {}

export const BetsFilters = async ({}: BetsFiltersProps) => {
  const bookmakers = await getBookmakers();

  return (
    <div className="w-full flex-col sm:flex-row flex gap-4 sm:items-end">
      <BetsFiltersStatus />
      <BetsFiltersBookmaker bookmakers={bookmakers} />
      <BetsFiltersOrder />
      <BetsFiltersClearAll />
    </div>
  );
};
