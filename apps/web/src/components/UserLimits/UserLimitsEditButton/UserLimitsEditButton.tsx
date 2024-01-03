import { Button } from "@ui/components/button";
import { Pencil } from "lucide-react";

interface UserLimitsEditButtonProps {
  isDisabled: boolean;
  setIsDisabled: (value: boolean) => void;
}

export const UserLimitsEditButton = ({ isDisabled, setIsDisabled }: UserLimitsEditButtonProps) => {
  if (!isDisabled) return null;

  return (
    <Button size="icon" className="absolute top-0 right-0" variant="ghost" type="button">
      <Pencil className="w-4 text-muted-foreground" onClick={() => setIsDisabled(false)} />
    </Button>
  );
};
