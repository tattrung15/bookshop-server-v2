import { AppException } from "@/common/exception/error.exception";
import { PrismaService } from "@/common/prisma/prisma.service";
import { bcryptCompare } from "@/common/utils/encryption.utils";
import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { JwtService } from "@nestjs/jwt/dist";
import { LoginBodyDto } from "./dto/login.dto";
import { LoginBody } from "./entities/login.entity";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async login(body: LoginBodyDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      throw new AppException(
        "Incorrect username or password",
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!bcryptCompare(body.password, user.password)) {
      throw new AppException(
        "Incorrect username or password",
        HttpStatus.BAD_REQUEST,
      );
    }

    const accessToken = this.jwtService.sign(
      { id: user.id, username: user.username },
      { expiresIn: "1d" },
    );

    const response: LoginBody = {
      jwt: accessToken,
      user: {
        id: user.id,
        address: user.address,
        amount: user.amount,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        phone: user.phone,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    };

    return response;
  }
}
