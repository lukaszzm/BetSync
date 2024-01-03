import { Type } from "class-transformer";
import { IsNumber, IsPositive } from "class-validator";

export class UserLimitDto {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  readonly limit: number;
}
