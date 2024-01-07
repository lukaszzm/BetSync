import { PaginationButton } from "../PaginationButton";
import { ChevronRight } from "lucide-react";

interface PaginationNextProps {
  nextPage: number | null;
}

export const PaginationNext = ({ nextPage }: PaginationNextProps) => {
  return (
    <PaginationButton toPage={nextPage}>
      <span className="sr-only">Next Page</span>
      <ChevronRight />
    </PaginationButton>
  );
};
