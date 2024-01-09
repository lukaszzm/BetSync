"use client";

import { UserCog } from "lucide-react";
import { UserLimitsForm } from "./UserLimitsForm";
import { forwardRef, useState } from "react";
import { MenuButton } from "@ui/components/menu-button";
import {
  Hybrid,
  HybridBody,
  HybridClose,
  HybridContent,
  HybridFooter,
  HybridHeader,
  HybridTitle,
  HybridTrigger,
} from "@ui/components/hybrid";
import { Button } from "@ui/components/button";

interface UserLimitsProps {
  currentLimit: number | null;
}

export const UserLimits = forwardRef<HTMLButtonElement, UserLimitsProps>(({ currentLimit }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Hybrid open={isOpen} onOpenChange={setIsOpen}>
      <HybridTrigger asChild>
        <MenuButton ref={ref} icon={<UserCog className="w-4 h-4" />}>
          User Limits
        </MenuButton>
      </HybridTrigger>
      <HybridContent className="sm:max-w-md">
        <HybridHeader>
          <HybridTitle>User Limits</HybridTitle>
        </HybridHeader>
        <HybridBody>
          <UserLimitsForm currentLimit={currentLimit} onSave={() => setIsOpen(false)} />
        </HybridBody>
        <HybridFooter>
          <HybridClose asChild>
            <Button variant="outline">Close</Button>
          </HybridClose>
        </HybridFooter>
      </HybridContent>
    </Hybrid>
  );
});

UserLimits.displayName = "UserLimits";
