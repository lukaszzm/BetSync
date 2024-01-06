import type { Bookmaker } from "@/interfaces/bookmaker";
import { BetsFiltersSelect } from "../BetsFiltersSelect";

interface BetsFiltersBookmakerProps {
  bookmakers: Bookmaker[];
}

export const BetsFiltersBookmaker = ({ bookmakers }: BetsFiltersBookmakerProps) => {
  const bookmakersValues = bookmakers.reduce(
    (acc, bookmaker) => {
      acc[bookmaker.id] = bookmaker.name;
      return acc;
    },
    {} as Record<string, string>,
  );

  return <BetsFiltersSelect param="bookmakerId" label="By bookmaker" values={bookmakersValues} />;
};
