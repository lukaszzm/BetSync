"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogHeader } from "@ui/components/dialog";
import { UserCog } from "lucide-react";
import { UserLimitsForm } from "./UserLimitsForm";
import { useState } from "react";
import { MenuButton } from "@ui/components/menu-button";

interface UserLimitsProps {
  currentLimit: number | null;
}

export const UserLimits = ({ currentLimit }: UserLimitsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <MenuButton className="rounded-b-none" icon={<UserCog className="w-4 h-4" />}>
          User Limits
        </MenuButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>User Limits</DialogTitle>
        </DialogHeader>
        <div className="my-4">
          <UserLimitsForm currentLimit={currentLimit} onSave={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
