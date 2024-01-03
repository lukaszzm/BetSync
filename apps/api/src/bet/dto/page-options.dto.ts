import { BetStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsUUID, Min } from "class-validator";
import { Order } from "src/constants";

export class PageOptionsDto {
  @IsOptional()
  @IsEnum(Order)
  readonly order?: Order;

  @IsOptional()
  @Type(() => Number)
  @Min(1)
  readonly page?: number;

  @IsOptional()
  @IsEnum(BetStatus)
  readonly status?: BetStatus;

  @IsOptional()
  @IsUUID()
  readonly bookmakerId?: string;
}
