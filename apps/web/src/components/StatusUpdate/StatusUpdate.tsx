"use client";

import { Button } from "@ui/components/button";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import { Bet } from "@/interfaces/bet";
import { StatusUpdateForm } from "./StatusUpdateForm";
import {
  Hybrid,
  HybridContent,
  HybridHeader,
  HybridTitle,
  HybridTrigger,
  HybridBody,
  HybridFooter,
  HybridClose,
} from "@ui/components/hybrid";

interface StatusUpdateProps extends Pick<Bet, "id" | "status"> {}

export const StatusUpdate = ({ id, status }: StatusUpdateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Hybrid open={isOpen} onOpenChange={setIsOpen}>
      <HybridTrigger asChild>
        <Button size="icon" variant="ghost" aria-label="Update bet status" disabled={status !== "pending"}>
          <Settings2 />
        </Button>
      </HybridTrigger>
      <HybridContent className="sm:max-w-md">
        <HybridHeader>
          <HybridTitle>Update Status</HybridTitle>
        </HybridHeader>
        <HybridBody>
          <StatusUpdateForm id={id} status={status} onUpdate={() => setIsOpen(false)} />
        </HybridBody>
        <HybridFooter>
          <HybridClose asChild>
            <Button variant="outline">Close</Button>
          </HybridClose>
        </HybridFooter>
      </HybridContent>
    </Hybrid>
  );
};
