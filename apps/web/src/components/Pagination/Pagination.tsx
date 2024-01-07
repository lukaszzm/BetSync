"use client";

import { getRange } from "@/utils/getRange";
import { PaginationPage } from "./PaginationPage";
import { PaginationPrev } from "./PaginationPrev";
import { PaginationNext } from "./PaginationNext";

interface PaginationProps {
  total: number;
  lastPage: number;
  currentPage: number;
  prev: number | null;
  next: number | null;
}

export const Pagination = ({ prev, currentPage, next, lastPage }: PaginationProps) => {
  const pages = getRange(currentPage, lastPage);

  return (
    <div className="flex gap-2">
      <PaginationPrev prevPage={prev} />

      {pages.map((page, i) => (
        <PaginationPage key={page} currentPage={currentPage} page={page} nextPage={pages[i + 1]} />
      ))}

      <PaginationNext nextPage={next} />
    </div>
  );
};
