import { signUp } from "@/actions/auth/sign-up";
import { useSignIn } from "./useSignIn";
import { useState } from "react";

export const useSignUp = () => {
  const [signUpError, setSignUpError] = useState<string | null>(null);

  const { signIn, error: signInError } = useSignIn();

  const signUpHandler = async (values: { email: string; name: string; password: string }) => {
    setSignUpError(null);

    const res = await signUp(values);

    if (!res.ok) {
      return setSignUpError(res.message);
    }

    const { name, ...credentials } = values;

    await signIn(credentials);
  };

  return {
    error: signUpError || signInError,
    signUp: signUpHandler,
  };
};
