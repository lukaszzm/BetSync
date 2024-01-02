import { signUp } from "@/actions/auth/sign-up";
import { useSignIn } from "./useSignIn";
import { useAction } from "./useAction";
import { SignUpValues } from "@/schemas/signUpSchema";

export const useSignUp = () => {
  const { execute, isLoading, error } = useAction(signUp);
  const { signIn, error: signInError } = useSignIn();

  const signUpHandler = async (values: SignUpValues) => {
    const res = await execute(values);

    if (!res.ok) {
      return;
    }

    const { name, ...credentials } = values;

    await signIn(credentials);
  };

  return {
    error: error || signInError,
    isLoading,
    signUp: signUpHandler,
  };
};
