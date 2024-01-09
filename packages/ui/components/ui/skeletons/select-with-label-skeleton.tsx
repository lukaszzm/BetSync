import { Skeleton } from "../skeleton";

export const SelectWithLabelSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-16  h-5 p-2" />
      <Skeleton className="w-full sm:w-32 md:w-40 h-9 p-2" />
    </div>
  );
};
