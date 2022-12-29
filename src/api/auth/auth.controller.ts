import { Body, Controller, Post } from "@nestjs/common";
import { LoginBodyDto } from "./dto/login.dto";

@Controller()
export class AuthController {
  @Post("login")
  login(@Body() body: LoginBodyDto) {
    return body;
  }
}
