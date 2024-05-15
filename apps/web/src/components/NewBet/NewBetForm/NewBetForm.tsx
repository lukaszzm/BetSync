"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@ui/components/select";

import { useForm } from "react-hook-form";
import { type NewBetValues, newBetSchema } from "@/schemas/newBetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
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
      link: "",
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input type="string" placeholder="Link to your bet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ErrorAlert error={error} />

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Add
        </Button>
      </form>
    </Form>
  );
};
