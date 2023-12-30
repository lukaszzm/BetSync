import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";
import { SignInDto } from "./dto/sign-in.dto";
import { AuthService } from "./auth.service";
import { RefreshGuard } from "./guards/refresh.guard";
import type { Request } from "express";

@Controller("auth")
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post("sign-up")
  async signUp(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Post("sign-in")
  async signIn(@Body() body: SignInDto) {
    return await this.authService.signIn(body);
  }

  @UseGuards(RefreshGuard)
  @Post("refresh")
  async refreshToken(@Req() req: Request) {
    return await this.authService.refreshTokens(req["user"]);
  }
}
