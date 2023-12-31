import { ROUTES } from "@/config/routes";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const DEFAULT_ERROR_MESSAGE = "Something went wrong";
const CREDENTIALS_ERROR_MESSAGE = "Your email address or password is incorrect";

export const useSignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const signInHandler = async ({ email, password }: { email: string; password: string }) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: searchParams.get("callbackUrl") ?? ROUTES.dashboard,
      });

      if (!response) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
      }

      if (!response.ok && response.error === "CredentialsSignin") {
        setError(CREDENTIALS_ERROR_MESSAGE);
      }

      if (response.ok && response.url) {
        router.replace(response.url);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(DEFAULT_ERROR_MESSAGE);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    signIn: signInHandler,
  };
};
