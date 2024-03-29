import { PageOptionsDto } from "../dto/page-options.dto";
import { BetPaginationOptions } from "./bet-pagination";

export function createPaginationOptions(query: PageOptionsDto): BetPaginationOptions {
  const { order, page, perPage, status, bookmakerId } = query;

  return {
    where: {
      status,
      bookmakerId,
    },
    orderBy: {
      createdAt: order ?? "desc",
    },
    page,
    perPage,
  };
}
