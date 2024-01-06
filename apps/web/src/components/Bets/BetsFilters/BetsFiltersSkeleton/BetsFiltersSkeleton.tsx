import { SelectWithLabelSkeleton } from "@ui/components/skeletons/select-with-label-skeleton";
import { Skeleton } from "@ui/components/skeleton";

export const BetsFiltersSkeleton = () => {
  return (
    <div className="w-full p-4 flex gap-8 items-end">
      <SelectWithLabelSkeleton />
      <SelectWithLabelSkeleton />
      <SelectWithLabelSkeleton />
      <Skeleton className="w-full max-w-[110px] h-9" />
    </div>
  );
};
