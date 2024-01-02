import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthId } from "src/auth/decorators/auth.decorator";
import { UserService } from "./user.service";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@UseGuards(JwtGuard)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("me")
  async getMe(@AuthId() userId: string) {
    return this.userService.findById(userId);
  }
}
