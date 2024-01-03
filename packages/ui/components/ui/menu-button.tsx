import { cn } from "@ui/lib/utils";
import { Button, ButtonProps } from "./button";

interface MenuButtonProps extends Omit<ButtonProps, "variant"> {
  icon: React.ReactNode;
}

export const MenuButton = ({ children, className, icon, ...props }: MenuButtonProps) => {
  return (
    <Button variant="ghost" className={cn("flex w-full justify-end gap-4", className)} {...props}>
      {children}
      {icon}
    </Button>
  );
};
