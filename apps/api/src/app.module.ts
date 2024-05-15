import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config, { configSchema } from "./config/configuration";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { BetModule } from "./bet/bet.module";
import { BookmakerModule } from "./bookmaker/bookmaker.module";
import { ScrapperModule } from "./scrapper/scrapper.module";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configSchema,
    }),
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule,
    BetModule,
    BookmakerModule,
    ScrapperModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
