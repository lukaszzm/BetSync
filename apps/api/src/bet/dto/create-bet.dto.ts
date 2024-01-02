import { BetStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateBetDto {
  @IsString()
  readonly link: string;

  @IsUUID()
  readonly bookmakerId: string;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  readonly toWin: number;

  @IsOptional()
  @IsEnum(BetStatus)
  readonly status?: BetStatus;
}
