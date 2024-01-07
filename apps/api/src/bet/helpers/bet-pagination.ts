import { Prisma } from "@prisma/client";

export type BetPaginationOptions = {
  where?: Prisma.BetWhereInput;
  orderBy?: Prisma.BetOrderByWithRelationInput;
  page?: number;
  perPage?: number;
};

export const defaultBetPaginationOptions = {
  orderBy: {
    createdAt: "desc",
  },
  where: {},
  page: 1,
  perPage: 5,
} as const satisfies BetPaginationOptions;
