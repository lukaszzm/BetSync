import { Module } from "@nestjs/common";
import { BookmakerController } from "./bookmaker.controller";
import { BookmakerService } from "./bookmaker.service";
import { PrismaService } from "src/providers/prisma/prisma.service";

@Module({
  controllers: [BookmakerController],
  providers: [BookmakerService, PrismaService],
})
export class BookmakerModule {}
