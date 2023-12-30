import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { SignInDto } from "./dto/sign-in.dto";
import { UserService } from "src/user/user.service";
import { compare } from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signIn({ email, password }: SignInDto) {
    const user = await this.validateUser(email, password);
    const tokens = await this.getTokens(user.id);

    return { user, tokens };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException("User with this email does not exist");
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    const { password: _password, ...result } = user;

    return result;
  }

  async refreshTokens(payload: unknown) {
    if (typeof payload !== "object" || !payload.hasOwnProperty("sub") || typeof payload["sub"] !== "string") {
      throw new UnauthorizedException("Invalid refresh token");
    }

    return await this.getTokens(payload["sub"]);
  }

  async getTokens(id: string) {
    const payload = {
      sub: id,
    };

    const [access_token, refresh_token] = await Promise.all([
      await this.jwtService.signAsync(payload, {
        expiresIn: "1h",
        secret: this.configService.get<string>("JWT_SECRET_KEY"),
      }),
      await this.jwtService.signAsync(payload, {
        expiresIn: "7d",
        secret: this.configService.get<string>("JWT_REFRESH_KEY"),
      }),
    ]);

    return { access_token, refresh_token };
  }
}
