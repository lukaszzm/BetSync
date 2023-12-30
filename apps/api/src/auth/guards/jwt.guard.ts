import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();

    const token = this.extractAccessTokenFromRequest(req);

    if (!token) {
      throw new UnauthorizedException("Invalid access token");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>("JWT_SECRET_KEY"),
      });

      req.user = payload;
    } catch (e) {
      throw new UnauthorizedException("Invalid access token");
    }

    return true;
  }

  private extractAccessTokenFromRequest(req: Request) {
    const [type, token] = req.headers.authorization?.split(" ") || [];
    return type === "Bearer" ? token : null;
  }
}
