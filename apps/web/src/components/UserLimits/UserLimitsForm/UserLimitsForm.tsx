import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { UserLimitsEditButton } from "../UserLimitsEditButton";
import { useAction } from "@/hooks/useAction";
import { type UserLimitValues, userLimitSchema } from "@/schemas/userLimitSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { setUserLimit } from "@/actions/user/set-user-limit";
import { ErrorAlert } from "@ui/components/error-alert";
import { toast } from "sonner";

interface UserLimitsFormProps {
  currentLimit: number | null;
  onSave: () => void;
}

export const UserLimitsForm = ({ currentLimit, onSave }: UserLimitsFormProps) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const form = useForm<UserLimitValues>({
    resolver: zodResolver(userLimitSchema),
    defaultValues: {
      limit: currentLimit ?? 0,
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current limit</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input {...field} type="number" min="0" className="relative" disabled={isDisabled} placeholder="Set your limit" />
                </FormControl>
                <UserLimitsEditButton isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
              </div>
              <FormDescription>We will inform you when you exceed your limit</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ErrorAlert error={error} />

        <Button type="submit" disabled={!isDirty} isLoading={isLoading}>
          Save
        </Button>
      </form>
    </Form>
  );
};
