import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class SignInDto {
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
