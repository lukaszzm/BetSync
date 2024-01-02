import { FormFieldSkeleton } from "@ui/components/skeletons/form-field-skeleton";
import { ButtonSkeleton } from "@ui/components/skeletons/button-skeleton";

export const NewBetSkeleton = () => {
  return (
    <div className="space-y-8">
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <ButtonSkeleton />
    </div>
  );
};
