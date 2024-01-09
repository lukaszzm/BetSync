import { getBets } from "@/actions/bet/get-bets";
import { BetsTable } from "@/components/Bets/BetsTable";
import { Pagination } from "@/components/Pagination";
import { BetsSearchParams } from "@/interfaces/search-params";

interface PageProps {
  searchParams: BetsSearchParams;
}

export default async function BetsTablePage({ searchParams }: PageProps) {
  const { data, meta } = await getBets(searchParams);

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <BetsTable bets={data} />
      <Pagination {...meta} />
    </div>
  );
}
