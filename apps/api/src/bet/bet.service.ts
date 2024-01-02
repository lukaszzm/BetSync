import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBetDto } from "./dto/create-bet.dto";
import { PrismaService } from "src/prisma.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class BetService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(dto: CreateBetDto, userId: string) {
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

  async getAll(userId: string) {
    return await this.prisma.bet.findMany({
      where: {
        userId,
      },
    });
  }

  async getLast(userId: string) {
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

  async getBest(userId: string) {
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
}
