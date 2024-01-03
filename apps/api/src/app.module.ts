import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config, { configSchema } from "./config/configuration";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { BetModule } from './bet/bet.module';
import { BookmakerModule } from './bookmaker/bookmaker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configSchema,
    }),
    UserModule,
    AuthModule,
    BetModule,
    BookmakerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
