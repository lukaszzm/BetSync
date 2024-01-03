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

export const SignOut = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <MenuButton className="rounded-b-none" icon={<LogOut className="w-4 h-4" />}>
          Sign Out
        </MenuButton>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Sign Out?</AlertDialogTitle>
          <AlertDialogDescription>Are you sure you want to sign out of your account?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => signOut()}>Sign Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
