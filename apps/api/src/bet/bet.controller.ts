import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { CreateBetDto } from "./dto/create-bet.dto";
import { AuthId } from "src/auth/decorators/auth.decorator";
import { BetService } from "./bet.service";

@UseGuards(JwtGuard)
@Controller("bet")
export class BetController {
  constructor(private betService: BetService) {}

  @Post()
  async createBet(@Body() body: CreateBetDto, @AuthId() userId: string) {
    return this.betService.create(body, userId);
  }

  @Get()
  async getBets(@AuthId() userId: string) {
    return this.betService.getAll(userId);
  }

  @Get("last")
  async getLastBet(@AuthId() userId: string) {
    return this.betService.getLast(userId);
  }

  @Get("best")
  async getBestBet(@AuthId() userId: string) {
    return this.betService.getBest(userId);
  }
}
