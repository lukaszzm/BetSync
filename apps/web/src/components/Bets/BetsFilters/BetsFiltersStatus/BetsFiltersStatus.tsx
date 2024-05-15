import { BetStatus } from "@/config/betStatus";
import { BetsFiltersSelect } from "../BetsFiltersSelect";

const filterValues = {
  [BetStatus.Pending]: "pending",
  [BetStatus.Win]: "win",
  [BetStatus.Lose]: "lose",
} as const;

export const BetsFiltersStatus = () => {
  return <BetsFiltersSelect param="status" label="By status" name="filter-by-status" values={filterValues} />;
};
