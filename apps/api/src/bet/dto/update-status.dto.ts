import { BetStatus } from "@prisma/client";
import { IsEnum, IsUUID } from "class-validator";

export class UpdateStatusDto {
  @IsEnum(BetStatus)
  readonly status: BetStatus;

  @IsUUID()
  readonly id: string;
}
