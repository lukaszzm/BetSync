import { cn } from "@ui/lib/utils";
import { Skeleton } from "../skeleton";

interface ButtonSkeletonProps {
  className?: string;
}

export const ButtonSkeleton = ({ className }: ButtonSkeletonProps) => {
  return <Skeleton className={cn("w-full h-10 p-2", className)} />;
};
