"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@ui/components/form";
import { Input } from "@ui/components/input";
import { Button } from "@ui/components/button";
import { ErrorAlert } from "@ui/components/error-alert";
import { type SignUpValues, signUpSchema } from "@/schemas/signUpSchema";
import type { SubmitHandler } from "react-hook-form";
import { useSignUp } from "@/hooks/useSignUp";
import { useTransition } from "react";

export const SignUpForm = () => {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const { handleSubmit, control } = form;

  const [isPending, startTransition] = useTransition();
  const { signUp, error } = useSignUp();

  const onSubmit: SubmitHandler<SignUpValues> = values => startTransition(() => signUp(values));

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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
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
          Sign Up
        </Button>
      </form>
    </Form>
  );
};
