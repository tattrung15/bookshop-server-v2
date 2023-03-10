import { ValidationError, Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/exception-filters/exception.filter";
import { ValidationErrorException } from "./common/exception/validation-error.exception";
import { CustomLogger } from "./common/logger/logger.service";
import { Config } from "./configs/common";
import { SocketAdapter } from "./gateways/socket/adapters/socket.adapter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.useWebSocketAdapter(new SocketAdapter(app));
  app.setGlobalPrefix("api");
  app.useLogger(app.get(CustomLogger));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new ValidationErrorException(validationErrors);
      },
    }),
  );
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(Config.APP_PORT, () => {
    Logger.log(`Nest application started on port: ${Config.APP_PORT}`);
  });
}
bootstrap();
