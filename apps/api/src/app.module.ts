import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import config, { configSchema } from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validationSchema: configSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
