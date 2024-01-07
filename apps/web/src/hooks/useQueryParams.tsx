import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const navigateWithQuery = (param: string, value: string, paramsToRemove?: string[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(param, value);

    if (paramsToRemove) {
      paramsToRemove.forEach(param => newSearchParams.delete(param));
    }

    push(`${pathname}?${newSearchParams}`);
  };

  const clearQueryParams = () => push(pathname);

  return { searchParams, pathname, navigateWithQuery, clearQueryParams };
};
