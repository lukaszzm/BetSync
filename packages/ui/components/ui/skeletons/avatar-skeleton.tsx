import { Avatar, AvatarFallback } from "../avatar";
import { Skeleton } from "../skeleton";

export const AvatarSkeleton = () => {
  return (
    <Avatar>
      <AvatarFallback>
        <Skeleton />
      </AvatarFallback>
    </Avatar>
  );
};
