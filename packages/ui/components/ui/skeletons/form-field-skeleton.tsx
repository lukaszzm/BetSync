import { Skeleton } from "../skeleton";

export const FormFieldSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-16 h-5" />
      <Skeleton className="w-full h-9 p-2" />
    </div>
  );
};
