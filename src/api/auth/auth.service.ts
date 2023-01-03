import { AppException } from "@/common/exception/error.exception";
import { getResponse } from "@/common/helper/helper";
import { PrismaService } from "@/common/prisma/prisma.service";
import { bcryptCompare } from "@/common/utils/encryption.utils";
import { Injectable, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
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
      { id: user.id, username: user.username, role: user.role },
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

    return getResponse(response);
  }
}
