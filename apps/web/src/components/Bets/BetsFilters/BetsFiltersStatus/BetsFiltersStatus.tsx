import { BetStatus } from "@/config/betStatus";
import { BetsFiltersSelect } from "../BetsFiltersSelect";

const statusValues = {
  [BetStatus.Won]: "won",
  [BetStatus.Lost]: "lost",
  [BetStatus.Pending]: "pending",
} as const;

export const BetsFiltersStatus = () => {
  return <BetsFiltersSelect param="status" label="By status" values={statusValues} />;
};
