import type { BetWithBookmaker } from "@/interfaces/bet";
import { formatDate } from "@/utils/formatDate";
import { BetStatusBadge } from "@ui/components/bet-status-badge";
import { TableCell } from "@ui/components/table";
import { TableRow } from "@ui/components/table";
import { StatusUpdate } from "@/components/StatusUpdate";

interface BetsTableContentProps {
  bets: BetWithBookmaker[];
}

export const BetsTableContent = ({ bets }: BetsTableContentProps) => {
  return (
    <>
      {bets.map(bet => (
        <TableRow key={bet.id}>
          <TableCell>{bet.id}</TableCell>
          <TableCell>{formatDate(bet.createdAt)}</TableCell>
          <TableCell>{bet.bookmaker.name}</TableCell>
          <TableCell className="text-center">{bet.stake}</TableCell>
          <TableCell className="text-center">{bet.potentialReturn}</TableCell>
          <TableCell>
            <BetStatusBadge status={bet.status} />
          </TableCell>
          <TableCell className="text-center">
            <StatusUpdate {...bet} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
