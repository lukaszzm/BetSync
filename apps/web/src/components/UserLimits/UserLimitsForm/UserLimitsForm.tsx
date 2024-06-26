import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAction } from "@/hooks/useAction";
import { type UserLimitValues, userLimitSchema } from "@/schemas/userLimitSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUserLimit } from "@/actions/user/set-user-limit";
import { ErrorAlert } from "@ui/components/error-alert";
import { toast } from "sonner";

interface UserLimitsFormProps {
  onSave: () => void;
}

export const UserLimitsForm = ({ onSave }: UserLimitsFormProps) => {
  const form = useForm<UserLimitValues>({
    resolver: zodResolver(userLimitSchema),
    defaultValues: {
      limit: 0,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = form;

  const { execute, isLoading, error } = useAction(setUserLimit, {
    onSuccess: data => {
      toast.success(data);
      onSave();
    },
  });

  const onSubmit: SubmitHandler<UserLimitValues> = async data => await execute(data);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={control}
          name="limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New limit</FormLabel>
              <FormControl>
                <Input {...field} type="string" placeholder="Set your new limit" />
              </FormControl>
              <FormDescription>We will inform you when you exceed your limit</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ErrorAlert error={error} />

        <Button type="submit" disabled={!isDirty} isLoading={isLoading} className="w-full sm:w-auto">
          Save
        </Button>
      </form>
    </Form>
  );
};
