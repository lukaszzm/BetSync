import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/providers/prisma/prisma.service";

@Injectable()
export class BookmakerService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.bookmaker.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.bookmaker.findUnique({
      where: {
        id: id,
      },
    });
  }
}
