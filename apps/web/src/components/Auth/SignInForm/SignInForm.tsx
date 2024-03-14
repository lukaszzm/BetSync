"use client";

import { type SignInValues, signInSchema } from "@/schemas/signInSchema";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Input } from "@ui/components/input";
import { Button } from "@ui/components/button";
import { useSignIn } from "@/hooks/useSignIn";
import { ErrorAlert } from "@ui/components/error-alert";
import { useTransition } from "react";

export const SignInForm = () => {
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control } = form;

  const [isPending, startTransition] = useTransition();
  const { signIn, error } = useSignIn();

  const onSubmit: SubmitHandler<SignInValues> = values => startTransition(() => signIn(values));

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ErrorAlert error={error} />
        <Button size="lg" type="submit" className="w-full" isLoading={isPending}>
          Sign In
        </Button>
      </form>
    </Form>
  );
};
