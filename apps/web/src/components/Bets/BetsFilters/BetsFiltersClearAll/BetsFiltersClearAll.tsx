"use client";

import { Button } from "@ui/components/button";
import { usePathname, useRouter } from "next/navigation";

export const BetsFiltersClearAll = () => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const clickHandler = () => {
    replace(pathname);
  };

  return (
    <Button variant="secondary" onClick={clickHandler}>
      Clear Filters
    </Button>
  );
};
