"use client";

import { Button, type ButtonProps } from "@ui/components/button";
import { signOut } from "next-auth/react";

export const SignOutButton = (buttonProps: Omit<ButtonProps, "onClick">) => {
  return (
    <Button {...buttonProps} onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};
