import { FormSkeleton } from "@ui/components/skeletons/form-skeleton";

export default async function BetsTableLoading() {
  return <FormSkeleton columns={7} rows={5} />;
}
