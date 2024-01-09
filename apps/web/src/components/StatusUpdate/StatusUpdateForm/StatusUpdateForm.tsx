import { BetStatus } from "@/config/betStatus";
import type { Bet } from "@/interfaces/bet";
import { statusUpdateSchema, type StatusUpdateValues } from "@/schemas/statusUpdateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Button } from "@ui/components/button";
import { useForm } from "react-hook-form";
import { updateBetStatus } from "@/actions/bet/update-bet-status";
import { useAction } from "@/hooks/useAction";
import { toast } from "sonner";
import { ErrorAlert } from "@ui/components/error-alert";

interface StatusUpdateFormProps extends Pick<Bet, "id" | "status"> {
  onUpdate: () => void;
}

export const StatusUpdateForm = ({ id, status, onUpdate }: StatusUpdateFormProps) => {
  const form = useForm<StatusUpdateValues>({
    resolver: zodResolver(statusUpdateSchema),
    defaultValues: {
      status,
    },
  });

  const { handleSubmit, control } = form;

  const {
    execute: updateStatus,
    isLoading,
    error,
  } = useAction(updateBetStatus, {
    onSuccess: data => {
      toast.success(data);
      onUpdate();
    },
  });

  const onSubmit = async (values: StatusUpdateValues) => await updateStatus({ id, ...values });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
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

        <Button isLoading={isLoading}>Update</Button>
      </form>
    </Form>
  );
};
