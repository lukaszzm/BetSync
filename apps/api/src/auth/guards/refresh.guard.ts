import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class RefreshGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    const token = this.extractRefreshTokenFromRequest(req);

    if (!token) {
      throw new UnauthorizedException("Invalid refresh token");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>("JWT_REFRESH_KEY"),
      });

      req.user = payload;
    } catch (e) {
      throw new UnauthorizedException("Invalid refresh token");
    }

    return true;
  }

  private extractRefreshTokenFromRequest(req: Request) {
    const [type, token] = req.headers.authorization?.split(" ") || [];
    return type === "Refresh" ? token : null;
  }
}
