"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@ui/components/dialog";
import { Button } from "@ui/components/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import { NewBetForm } from "../NewBetForm";
import type { Bookmaker } from "@/interfaces/bookmaker";

interface NewBetProps {
  bookmakers: Bookmaker[];
}

export const NewBetDialog = ({ bookmakers }: NewBetProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="w-5 h-5" />
          Add New Bet
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Bet</DialogTitle>
        </DialogHeader>
        <NewBetForm bookmakers={bookmakers} onAdd={() => setIsDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
