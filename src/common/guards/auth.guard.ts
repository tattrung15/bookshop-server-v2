import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { JwtPayload } from "../dto/header.dto";
import { AppException } from "../exception/error.exception";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext) {
    try {
      const request: Request = context.switchToHttp().getRequest();
      const headers = request.headers;
      const authorization = headers["authorization"];

      if (authorization) {
        const token = authorization.split(/\s/)[1];

        const decoded = this.jwtService.verify<JwtPayload>(token);

        request.body.user = decoded;

        return true;
      } else {
        throw new AppException(
          "Missing Authorization Header",
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (error) {
      throw new AppException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
