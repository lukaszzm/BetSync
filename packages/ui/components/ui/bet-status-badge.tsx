import { cn } from "@ui/lib/utils";
import { Badge, BadgeProps } from "./badge";

interface BetStatusBadgeProps extends Omit<BadgeProps, "variant" | "children"> {
  status: "pending" | "won" | "lost";
}

const getVariant = (status: BetStatusBadgeProps["status"]): BadgeProps["variant"] => {
  switch (status) {
    case "pending":
      return "info";
    case "won":
      return "success";
    case "lost":
      return "destructive";
  }
};

export const BetStatusBadge = ({ status, className, ...props }: BetStatusBadgeProps) => {
  const variant = getVariant(status);

  return (
    <Badge variant={variant} className={cn("min-w-20 justify-center text-center", className)} {...props}>
      {status}
    </Badge>
  );
};
