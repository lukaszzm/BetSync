import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthId } from "src/auth/decorators/auth.decorator";
import { UserService } from "./user.service";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { UserLimitDto } from "./dto/user-limit.dto";

@UseGuards(JwtGuard)
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("me")
  async getMe(@AuthId() userId: string) {
    return this.userService.findById(userId);
  }

  @Post("limit")
  async setLimit(@AuthId() userId: string, @Body() body: UserLimitDto) {
    return this.userService.setLimit(userId, body.limit);
  }
}
