import { cn } from "@ui/lib/utils";
import { Badge, BadgeProps } from "./badge";

interface BetStatusBadgeProps extends Omit<BadgeProps, "variant" | "children"> {
  status: "win" | "lose" | "pending";
}

const getVariant = (status: BetStatusBadgeProps["status"]): BadgeProps["variant"] => {
  switch (status) {
    case "pending":
      return "info";
    case "win":
      return "success";
    case "lose":
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
