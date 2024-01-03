import { Controller, Get, Param } from "@nestjs/common";
import { Bookmaker } from "@prisma/client";
import { BookmakerService } from "./bookmaker.service";

@Controller("bookmaker")
export class BookmakerController {
  constructor(private bookmakerService: BookmakerService) {}

  @Get()
  async findAll(): Promise<Bookmaker[]> {
    return this.bookmakerService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Bookmaker> {
    return this.bookmakerService.findOne(id);
  }
}
