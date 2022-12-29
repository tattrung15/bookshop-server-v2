import { RouteTree } from "@nestjs/core";
import { AuthModule } from "./auth.module";

const AUTH: RouteTree = {
  path: "/auth",
  module: AuthModule,
};

export const AUTH_ROUTES = [AUTH];
