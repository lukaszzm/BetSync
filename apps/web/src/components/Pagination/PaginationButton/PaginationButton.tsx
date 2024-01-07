import { useQueryParams } from "@/hooks/useQueryParams";
import { Button, type ButtonProps } from "@ui/components/button";

interface PaginationButtonProps extends Omit<ButtonProps, "onClick"> {
  toPage: number | null;
  isActive?: boolean;
}

export const PaginationButton = ({ toPage, isActive, children, ...props }: PaginationButtonProps) => {
  const { navigateWithQuery } = useQueryParams();

  const clickHandler = () => {
    if (!toPage) return;

    navigateWithQuery("page", toPage.toString());
  };

  return (
    <Button variant={isActive ? "default" : "outline"} size="icon" disabled={!toPage} onClick={clickHandler} {...props}>
      {children}
    </Button>
  );
};
