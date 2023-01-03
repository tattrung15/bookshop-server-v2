import { LoggerMiddleware } from "@/common/logger/logger.middleware";
import { LoggerModule } from "@/common/logger/logger.module";
import { PrismaModule } from "@/common/prisma/prisma.module";
import { Config } from "@/configs/common";
import { Module, MiddlewareConsumer } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    LoggerModule,
    JwtModule.register({
      secret: Config.JWT_SECRET,
    }),
    PrismaModule,
  ],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("");
  }
}
