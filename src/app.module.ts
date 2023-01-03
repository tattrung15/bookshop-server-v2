import { LoggingInterceptor } from "@algoan/nestjs-logging-interceptor";
import { MiddlewareConsumer } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR, RouterModule } from "@nestjs/core";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./common/logger/logger.middleware";
import { LoggerModule } from "./common/logger/logger.module";
import { PrismaModule } from "./common/prisma/prisma.module";
import { PrismaService } from "./common/prisma/prisma.service";
import { SocketModule } from "./gateways/socket/socket.module";
import { routes } from "./routes";
import { AuthModule } from "./api/auth/auth.module";
import { UsersModule } from "./api/users/users.module";

@Module({
  imports: [
    RouterModule.register(routes),
    LoggerModule,
    PrismaModule,
    SocketModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    PrismaService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("");
  }
}
