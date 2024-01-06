import { Skeleton } from "../skeleton";

export const SelectWithLabelSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-16 h-5 p-2" />
      <Skeleton className="w-[180px] h-9 p-2" />
    </div>
  );
};
