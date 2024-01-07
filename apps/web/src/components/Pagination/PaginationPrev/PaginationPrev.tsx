import { PaginationButton } from "../PaginationButton";
import { ChevronLeft } from "lucide-react";

interface PaginationPrevProps {
  prevPage: number | null;
}

export const PaginationPrev = ({ prevPage }: PaginationPrevProps) => {
  return (
    <PaginationButton toPage={prevPage}>
      <span className="sr-only">Previous Page</span>
      <ChevronLeft />
    </PaginationButton>
  );
};
