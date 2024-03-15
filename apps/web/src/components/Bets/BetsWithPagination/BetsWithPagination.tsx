import { getBets } from "@/actions/bet/get-bets";
import { BetsSearchParams } from "@/interfaces/search-params";
import { BetsTable } from "../BetsTable";
import { Pagination } from "@/components/Pagination";

interface BetsWithPaginationProps {
  searchParams: BetsSearchParams;
}

export const BetsWithPagination = async ({ searchParams }: BetsWithPaginationProps) => {
  const { data, meta } = await getBets(searchParams);

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <BetsTable bets={data} />
      <Pagination {...meta} />
    </div>
  );
};
