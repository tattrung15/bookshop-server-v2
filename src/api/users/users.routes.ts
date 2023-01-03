import { RouteTree } from "@nestjs/core";
import { UsersModule } from "./users.module";

const USERS: RouteTree = {
  path: "/users",
  module: UsersModule,
};

export const USERS_ROUTES = [USERS];
