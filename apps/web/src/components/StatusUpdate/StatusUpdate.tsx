"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@ui/components/dialog";
import { Button } from "@ui/components/button";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { Bet } from "@/interfaces/bet";
import { StatusUpdateForm } from "./StatusUpdateForm";

interface StatusUpdateProps extends Pick<Bet, "id" | "status"> {}

export const StatusUpdate = ({ id, status }: StatusUpdateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Settings2 />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Status</DialogTitle>
        </DialogHeader>
        <div className="my-4">
          <StatusUpdateForm id={id} status={status} onUpdate={() => setIsOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
