"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@ui/components/select";

import { useForm } from "react-hook-form";
import { type NewBetValues, newBetSchema } from "@/schemas/newBetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { BetStatus } from "@/config/betStatus";
import type { Bookmaker } from "@/interfaces/bookmaker";
import { useAction } from "@/hooks/useAction";
import { addNewBet } from "@/actions/bet/add-new-bet";
import { ErrorAlert } from "@ui/components/error-alert";
import { toast } from "sonner";

interface NewBetFromProps {
  bookmakers: Bookmaker[];
  onAdd: () => void;
}

export const NewBetForm = ({ bookmakers, onAdd }: NewBetFromProps) => {
  const form = useForm<NewBetValues>({
    resolver: zodResolver(newBetSchema),
    defaultValues: {
      stake: 10,
      potentialReturn: 50,
    },
  });

  const { handleSubmit, control } = form;

  const {
    execute: addBet,
    isLoading,
    error,
  } = useAction(addNewBet, {
    onSuccess: data => {
      toast.success(data);
      onAdd();
    },
  });

  const onSubmit = async (values: NewBetValues) => await addBet(values);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="bookmakerId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bookmaker</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label="Trigger bookmaker select">
                    <SelectValue placeholder="Select bookmaker from the list" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {bookmakers.map(({ id, name }) => (
                    <SelectItem key={id} value={id}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="stake"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stake</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="potentialReturn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Potential Return</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status (optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger aria-label="Trigger status select">
                    <SelectValue placeholder="Select current status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(BetStatus).map(status => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <ErrorAlert error={error} />

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
