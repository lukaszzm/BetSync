import { PaginationButton } from "../PaginationButton";

interface PaginationPageProps {
  currentPage: number;
  page: number;
  nextPage?: number;
}

export const PaginationPage = ({ currentPage, page, nextPage }: PaginationPageProps) => {
  return (
    <>
      <PaginationButton isActive={currentPage === page} toPage={page}>
        {page}
      </PaginationButton>

      {nextPage && page + 1 !== nextPage && <span className="flex items-center">...</span>}
    </>
  );
};
