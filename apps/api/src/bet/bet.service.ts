import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBetDto } from "./dto/create-bet.dto";
import { PrismaService } from "src/providers/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { Bet } from "@prisma/client";
import { PaginatorResult, paginator } from "src/providers/prisma/paginator";
import { BetPaginationOptions, defaultBetPaginationOptions } from "./helpers/bet-pagination";
import { UpdateStatusDto } from "./dto/update-status.dto";

const paginate = paginator({ perPage: 5 });

@Injectable()
export class BetService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(dto: CreateBetDto, userId: string): Promise<Bet> {
    const { bookmakerId, ...data } = dto;

    const newBet = await this.prisma.bet.create({
      data: {
        ...data,
        prize: data.potentialReturn - data.stake,
        user: {
          connect: {
            id: userId,
          },
        },
        bookmaker: {
          connect: {
            id: bookmakerId,
          },
        },
      },
    });

    if (newBet.status === "won") {
      await this.userService.incrementBalance(userId, newBet.potentialReturn - newBet.stake);
    }

    if (newBet.status === "lost") {
      await this.userService.decrementBalance(userId, newBet.stake);
    }

    return newBet;
  }

  async getAll(userId: string, options: BetPaginationOptions = defaultBetPaginationOptions): Promise<PaginatorResult<Bet>> {
    const { orderBy, where, page, perPage } = options;

    return await paginate(
      this.prisma.bet,
      {
        where: {
          userId,
          ...where,
        },
        orderBy,
        include: {
          bookmaker: true,
        },
      },
      {
        page,
        perPage,
      },
    );
  }

  async getLast(userId: string): Promise<Bet> {
    const lastBet = await this.prisma.bet.findFirst({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!lastBet) {
      throw new NotFoundException();
    }

    return lastBet;
  }

  async getBest(userId: string): Promise<Bet> {
    const bestBet = await this.prisma.bet.findFirst({
      where: {
        userId,
        status: "won",
      },
      orderBy: {
        prize: "desc",
      },
    });

    if (!bestBet) {
      throw new NotFoundException();
    }

    return bestBet;
  }

  async updateStatus(dto: UpdateStatusDto, userId: string): Promise<Bet> {
    const { id, status } = dto;

    const bet = await this.prisma.bet.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!bet) {
      throw new NotFoundException();
    }

    if (status === "won") {
      await this.userService.incrementBalance(userId, bet.potentialReturn - bet.stake);
    }

    if (status === "lost") {
      await this.userService.decrementBalance(userId, bet.stake);
    }

    return await this.prisma.bet.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }
}
