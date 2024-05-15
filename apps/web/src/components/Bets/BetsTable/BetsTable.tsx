import type { BetWithBookmaker } from "@/interfaces/bet";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@ui/components/table";
import { BetsTableContent } from "./BetsTableContent";

interface BetsTableProps {
  bets: BetWithBookmaker[];
}

export const BetsTable = ({ bets }: BetsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Bookmaker</TableHead>
          <TableHead>Stake</TableHead>
          <TableHead>Return</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bets.length === 0 ? (
          <TableRow>
            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
              No bets found
            </TableCell>
          </TableRow>
        ) : (
          <BetsTableContent bets={bets} />
        )}
      </TableBody>
    </Table>
  );
};
