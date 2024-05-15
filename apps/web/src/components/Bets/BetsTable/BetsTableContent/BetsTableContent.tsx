import type { BetWithBookmaker } from "@/interfaces/bet";
import { formatDate } from "@/utils/formatDate";
import { BetStatusBadge } from "@ui/components/bet-status-badge";
import { TableCell } from "@ui/components/table";
import { TableRow } from "@ui/components/table";
import { Button } from "@ui/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { toCurrencyString } from "@/utils/toCurrencyString";

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
          <TableCell className="text-center">{toCurrencyString(bet.stake)}</TableCell>
          <TableCell className="text-center">{toCurrencyString(bet.win)}</TableCell>
          <TableCell>
            <BetStatusBadge status={bet.status} />
          </TableCell>
          <TableCell>
            <Button asChild variant="ghost" size="icon">
              <Link href={bet.link} aria-label="Redirect to bet">
                <ExternalLink size={18} />
              </Link>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
