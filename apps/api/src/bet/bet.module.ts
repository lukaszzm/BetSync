import { Module } from "@nestjs/common";
import { BetController } from "./bet.controller";
import { BetService } from "./bet.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";

@Module({
  controllers: [BetController],
  providers: [BetService, JwtService, PrismaService],
})
export class BetModule {}
