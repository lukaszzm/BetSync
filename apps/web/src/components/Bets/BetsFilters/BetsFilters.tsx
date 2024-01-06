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
    <div className="w-full p-4 flex gap-8 items-end">
      <BetsFiltersStatus />
      <BetsFiltersBookmaker bookmakers={bookmakers} />
      <BetsFiltersOrder />
      <BetsFiltersClearAll />
    </div>
  );
};
