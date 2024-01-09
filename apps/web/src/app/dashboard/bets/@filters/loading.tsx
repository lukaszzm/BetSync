import { Skeleton } from "@ui/components/skeleton";
import { SelectWithLabelSkeleton } from "@ui/components/skeletons/select-with-label-skeleton";

export default async function BetsFiltersLoading() {
  return (
    <div className="w-full flex-col sm:flex-row flex gap-4 sm:items-end">
      <SelectWithLabelSkeleton />
      <SelectWithLabelSkeleton />
      <SelectWithLabelSkeleton />
      <Skeleton className="w-full sm:w-32 md:w-40 h-9" />
    </div>
  );
}
