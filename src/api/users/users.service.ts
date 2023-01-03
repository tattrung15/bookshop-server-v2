import { getPagination, getResponse } from "@/common/helper/helper";
import { PrismaService } from "@/common/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { GetUsersQueryDto } from "./dto/get-users.dto";
import { GetUsers } from "./entities/get-users.entity";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(query: GetUsersQueryDto) {
    const usersCount = await this.prisma.user.count();

    const pagination = getPagination(query.page, query.perPage, usersCount);

    const skip = (pagination.page - 1) * pagination.perPage;
    const users = await this.prisma.user.findMany({
      skip,
      take: pagination.perPage,
    });

    const response: GetUsers[] = users.map((user) => ({
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
    }));

    return getResponse(response, pagination);
  }
}
