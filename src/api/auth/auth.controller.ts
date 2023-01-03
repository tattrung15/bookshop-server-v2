import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  ClassSerializerInterceptor,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginBodyDto } from "./dto/login.dto";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("login")
  @HttpCode(HttpStatus.OK)
  login(@Body() body: LoginBodyDto) {
    return this.authService.login(body);
  }
}
