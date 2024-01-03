import { Prisma } from "@prisma/client";

export type BetPaginationOptions = {
  where?: Prisma.BetWhereInput;
  orderBy?: Prisma.BetOrderByWithRelationInput;
  page?: number;
};

export const defaultBetPaginationOptions = {
  orderBy: {
    createdAt: "desc",
  },
  where: {},
  page: 1,
} as const satisfies BetPaginationOptions;
