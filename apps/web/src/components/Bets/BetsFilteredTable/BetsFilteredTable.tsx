import { getBets } from "@/actions/bet/get-bets";
import { BetsSearchParams } from "@/interfaces/search-params";
import { BetsTable } from "../BetsTable";

interface BetsFilteredTableProps extends BetsSearchParams {}

export const BetsFilteredTable = async (props: BetsFilteredTableProps) => {
  const res = await getBets(props);
  const bets = res.data;

  return <BetsTable bets={bets} />;
};
