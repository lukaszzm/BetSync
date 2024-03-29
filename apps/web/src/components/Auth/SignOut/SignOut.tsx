"use client";

import { signOut } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@ui/components/alert-dialog";
import { LogOut } from "lucide-react";
import { MenuButton } from "@ui/components/menu-button";
import { forwardRef, useTransition } from "react";
import { Button } from "@ui/components/ui/button";

export const SignOut = forwardRef<HTMLButtonElement>((_, ref) => {
  const [isPending, startTransition] = useTransition();

  const signOutHandler = () => startTransition(() => signOut());

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MenuButton ref={ref} icon={<LogOut className="w-4 h-4" />}>
          Sign Out
        </MenuButton>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-11/12 rounded-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Out?</AlertDialogTitle>
          <AlertDialogDescription>Are you sure you want to sign out of your account?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={signOutHandler} isLoading={isPending}>
              Sign Out
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

SignOut.displayName = "SignOut";
