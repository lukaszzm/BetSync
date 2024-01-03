import { Suspense } from "react";
import { LimitWarningAlert } from "./LimitWarningAlert";

export const LimitWarning = () => {
  return (
    <Suspense>
      <LimitWarningAlert />
    </Suspense>
  );
};
