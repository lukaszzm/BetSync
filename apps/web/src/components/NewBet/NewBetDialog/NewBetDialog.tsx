"use client";

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
import { useState } from "react";
import { Plus } from "lucide-react";
import { NewBetForm } from "../NewBetForm";
import type { Bookmaker } from "@/interfaces/bookmaker";

interface NewBetProps {
  bookmakers: Bookmaker[];
}

export const NewBetDialog = ({ bookmakers }: NewBetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Hybrid open={isOpen} onOpenChange={setIsOpen}>
      <HybridTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="w-5 h-5" />
          Add New Bet
        </Button>
      </HybridTrigger>
      <HybridContent>
        <HybridHeader>
          <HybridTitle>New Bet</HybridTitle>
        </HybridHeader>
        <HybridBody>
          <NewBetForm bookmakers={bookmakers} onAdd={() => setIsOpen(false)} />
        </HybridBody>
        <HybridFooter>
          <HybridClose asChild>
            <Button variant="outline">Cancel</Button>
          </HybridClose>
        </HybridFooter>
      </HybridContent>
    </Hybrid>
  );
};
