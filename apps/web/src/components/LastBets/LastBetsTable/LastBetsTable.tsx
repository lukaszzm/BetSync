import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@ui/components/table";
import { BetStatusBadge } from "@ui/components/bet-status-badge";
import { getBets } from "@/actions/bet/get-bets";

export const LastBetsTable = async () => {
  const res = await getBets({ perPage: 5 });
  const bets = res.data;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Bookmaker</TableHead>
          <TableHead>Stake</TableHead>
          <TableHead>Potential Return</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bets.map(bet => (
          <TableRow key={bet.id}>
            <TableCell>{bet.id}</TableCell>
            <TableCell>{new Date(bet.createdAt).toLocaleDateString("en-GB")}</TableCell>
            <TableCell>{bet.bookmaker.name}</TableCell>
            <TableCell className="text-center">{bet.stake}</TableCell>
            <TableCell className="text-center">{bet.potentialReturn}</TableCell>
            <TableCell>
              <BetStatusBadge status={bet.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
