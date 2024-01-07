import { getBets } from "@/actions/bet/get-bets";
import { BetsSearchParams } from "@/interfaces/search-params";
import { BetsTable } from "../BetsTable";
import { Pagination } from "@/components/Pagination";

interface BetsFilteredTableProps extends BetsSearchParams {}

export const BetsFilteredTable = async (props: BetsFilteredTableProps) => {
  const { data, meta } = await getBets(props);

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <BetsTable bets={data} />
      <Pagination {...meta} />
    </div>
  );
};
