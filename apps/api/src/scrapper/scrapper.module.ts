import { Module } from "@nestjs/common";
import { ScrapperService } from "./scrapper.service";
import { BetService } from "src/bet/bet.service";
import { PrismaService } from "src/providers/prisma/prisma.service";
import { UserService } from "src/user/user.service";

@Module({
  providers: [ScrapperService, BetService, PrismaService, UserService],
})
export class ScrapperModule {}
