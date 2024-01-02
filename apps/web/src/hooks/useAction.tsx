import { HookCallbacks, ServerAction } from "@/interfaces/server-action";
import { useState } from "react";

export const useAction = <TValues, TData>(action: ServerAction<TValues, TData>, callbacks?: HookCallbacks<TData>) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { onSuccess, onError } = callbacks || {};

  const execute = async (data: TValues) => {
    setIsLoading(true);
    setError(null);

    const res = await action(data);

    if (res.ok) {
      onSuccess?.(res.data);
    } else {
      onError?.(res.error);
      setError(res.error);
    }

    setIsLoading(false);
    return res;
  };

  return {
    error,
    isLoading,
    execute,
  };
};
