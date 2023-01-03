import { ROLE } from "@/common/constants/constants";
import { Roles } from "@/common/decorators/roles.decorator";
import {
  Controller,
  UseInterceptors,
  ClassSerializerInterceptor,
  Get,
  Query,
} from "@nestjs/common";
import { GetUsersQueryDto } from "./dto/get-users.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @Roles(ROLE.ADMIN)
  getUsers(@Query() query: GetUsersQueryDto) {
    return this.usersService.getUsers(query);
  }
}
