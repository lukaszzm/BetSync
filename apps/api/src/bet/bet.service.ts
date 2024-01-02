import { Injectable } from "@nestjs/common";
import { CreateBetDto } from "./dto/create-bet.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class BetService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBetDto, userId: string) {
    const { bookmakerId, ...data } = dto;

    const newBet = await this.prisma.bet.create({
      data: {
        ...data,
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

    return newBet;
  }

  async getAll(userId: string) {
    return await this.prisma.bet.findMany({
      where: {
        userId,
      },
    });
  }
}
