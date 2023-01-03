import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { ROLE } from "../constants/constants";
import { AuthGuard } from "../guards/auth.guard";
import { RolesGuard } from "../guards/role.guard";

export const ROLES_KEY = "roles";
export const Roles = (...roles: ROLE[]) => {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RolesGuard),
  );
};
