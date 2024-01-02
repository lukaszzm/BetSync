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
  readonly stake: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  readonly potentialReturn: number;

  @IsOptional()
  @IsEnum(BetStatus)
  readonly status?: BetStatus;
}
