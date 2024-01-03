import { Module } from "@nestjs/common";
import { BetController } from "./bet.controller";
import { BetService } from "./bet.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/providers/prisma/prisma.service";
import { UserService } from "src/user/user.service";

@Module({
  controllers: [BetController],
  providers: [BetService, JwtService, PrismaService, UserService],
})
export class BetModule {}
