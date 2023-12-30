import { IsEmail, IsString, MinLength } from "class-validator";

export class SignInDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
