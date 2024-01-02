export type ServerAction<TValues, TData> = (values: TValues) => Promise<ServerActionReturnType<TData>>;

export type ServerActionReturnType<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: string;
    };

export type HookCallbacks<TData> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: string) => void;
};
