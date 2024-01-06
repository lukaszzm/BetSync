import { cn } from "@ui/lib/utils";
import { Button, ButtonProps } from "./button";
import { forwardRef } from "react";

interface MenuButtonProps extends Omit<ButtonProps, "variant"> {
  icon: React.ReactNode;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(({ children, className, icon, ...props }, ref) => {
  return (
    <Button ref={ref} variant="ghost" className={cn("flex w-full justify-end gap-4", className)} {...props}>
      {children}
      {icon}
    </Button>
  );
});
