import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateBetDto } from "./dto/create-bet.dto";
import { PrismaService } from "src/providers/prisma/prisma.service";
import { UserService } from "src/user/user.service";
import { Bet, BetStatus } from "@prisma/client";
import { PaginatorResult, paginator } from "src/providers/prisma/paginator";
import { BetPaginationOptions, defaultBetPaginationOptions } from "./helpers/bet-pagination";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { ScrapperService } from "src/scrapper/scrapper.service";
import { Cron, CronExpression } from "@nestjs/schedule";

const paginate = paginator({ perPage: 5 });

@Injectable()
export class BetService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
    private scrapperService: ScrapperService,
  ) {}

  async create(dto: CreateBetDto, userId: string): Promise<Bet> {
    const { bookmakerId, link } = dto;

    const bet = await this.scrapperService.scrapeBet(dto.link);

    if (!bet) {
      throw new BadRequestException("Could not get bet information, check link and try again");
    }

    const newBet = await this.prisma.bet.create({
      data: {
        link,
        ...bet,
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

    if (newBet.status === BetStatus.win) {
      await this.userService.incrementBalance(userId, newBet.win - newBet.stake);
    }

    if (newBet.status === BetStatus.lose) {
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
        status: "win",
      },
      orderBy: {
        win: "desc",
      },
    });

    if (!bestBet) {
      throw new NotFoundException();
    }

    return bestBet;
  }

  async updateStatus(dto: UpdateStatusDto, userId: string): Promise<Bet> {
    const { id, status } = dto;

    const currentBet = await this.prisma.bet.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!currentBet) {
      throw new NotFoundException();
    }

    if (currentBet.status !== BetStatus.pending) {
      throw new BadRequestException("Bet status cannot be updated");
    }

    if (status === BetStatus.win) {
      await this.userService.incrementBalance(userId, currentBet.win - currentBet.stake);
    }

    if (status === BetStatus.lose) {
      await this.userService.decrementBalance(userId, currentBet.stake);
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

  @Cron(CronExpression.EVERY_DAY_AT_4AM, { name: "update_pending_bets" })
  async updatePendingBets() {
    const pendingBets = await this.prisma.bet.findMany({
      where: {
        status: BetStatus.pending,
      },
    });

    pendingBets.forEach(async bet => {
      const scrapedBet = await this.scrapperService.scrapeBet(bet.link);

      if (!scrapedBet || scrapedBet.status === BetStatus.pending) {
        return;
      }

      const newData = {
        ...scrapedBet,
        id: bet.id,
      } satisfies UpdateStatusDto;

      await this.updateStatus(newData, bet.userId);
    });
  }
}
