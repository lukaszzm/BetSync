import { BetsFiltersSelect } from "../BetsFiltersSelect";

enum Order {
  desc = "desc",
  asc = "asc",
}

export const BetsFiltersOrder = () => {
  return <BetsFiltersSelect param="order" label="By creation date" values={Order} placeholder="default" />;
};
