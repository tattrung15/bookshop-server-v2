import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
  Logger,
  ForbiddenException,
} from "@nestjs/common";
import { Response } from "express";
import { ErrorResponse } from "../dto/error-response.dto";
import {
  AppException,
  ServerTemporarilyUnavailableException,
  ServerTooBusyException,
} from "../exception/error.exception";
import { ValidationErrorException } from "../exception/validation-error.exception";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let message = "";

    switch (true) {
      case exception instanceof AppException:
        message = exception.message;
        break;
      case exception instanceof ForbiddenException:
        message = "Access denied";
        break;
      case exception instanceof ValidationErrorException:
        const errors = (<ValidationErrorException>exception).errors;
        if (errors.length) {
          const firstError = errors[0];
          for (const reason in firstError.constraints) {
            message = firstError.constraints[reason];
            break;
          }
        }
        break;
      case exception instanceof InternalServerErrorException:
        message = "Internal server error";
        break;
      case exception instanceof ServerTooBusyException:
        message =
          "Servers are too busy to handle your request. Please access after a while.";
        break;
      case exception instanceof ServerTemporarilyUnavailableException:
        message =
          "Servers are temporarily unable to handle your request. Please access after a while.";
        break;
      default:
        message = "Unknown error occured.";
        Logger.error({ message: exception });
    }

    const errorReponse: ErrorResponse = {
      statusCode: status,
      message,
    };

    response.status(status).json(errorReponse);
  }
}
