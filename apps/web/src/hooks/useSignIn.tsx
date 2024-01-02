import { ROUTES } from "@/config/routes";
import { CREDENTIALS_ERROR_MESSAGE, DEFAULT_ERROR_MESSAGE } from "@/constants";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useSignIn = () => {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const signInHandler = async (values: { email: string; password: string }) => {
    setError(null);

    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: searchParams.get("callbackUrl") ?? ROUTES.dashboard,
      });

      if (!res) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
      }

      if (!res.ok && res.error === "CredentialsSignin") {
        setError(CREDENTIALS_ERROR_MESSAGE);
      }

      if (res.ok && res.url) {
        router.replace(res.url);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(DEFAULT_ERROR_MESSAGE);
      }
    }
  };

  return {
    error,
    signIn: signInHandler,
  };
};
