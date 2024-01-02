"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@ui/components/dialog";
import { Button } from "@ui/components/button";
import { Plus } from "lucide-react";
import { NewBetContent } from "./NewBetContent";
import { Suspense, useState } from "react";
import { NewBetSkeleton } from "./NewBetSkeleton";

export const NewBet = () => {
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
        <Suspense fallback={<NewBetSkeleton />}>
          <NewBetContent onAdd={() => setIsDialogOpen(false)} />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};
