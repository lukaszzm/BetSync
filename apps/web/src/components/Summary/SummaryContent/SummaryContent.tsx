import { getLastBet } from "@/actions/bet/get-last-bet";
import { getUserInfo } from "@/actions/user/get-user-info";
import { SummaryBalance } from "../SummaryBalance";
import { SummaryLast } from "../SummaryLast";
import { SummaryBest } from "../SummaryBest";
import { getBestBet } from "@/actions/bet/get-best-bet";

export const SummaryContent = async () => {
  const [user, lastBet, bestBet] = await Promise.all([getUserInfo(), getLastBet(), getBestBet()]);

  return (
    <>
      <SummaryBalance balance={user.balance} />
      <SummaryLast lastBet={lastBet} />
      <SummaryBest bestBet={bestBet} />
    </>
  );
};
