import { ServiceUnavailableException, HttpException } from "@nestjs/common";

export class AppException extends HttpException {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}

export class ServerTooBusyException extends ServiceUnavailableException {}

export class ServerTemporarilyUnavailableException extends ServiceUnavailableException {}
