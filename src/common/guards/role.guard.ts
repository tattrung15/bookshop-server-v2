import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { JwtPayload } from "../dto/header.dto";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();

    const requestedUser: JwtPayload = request.body.user;
    if (!requestedUser || !requestedUser.role) {
      return false;
    }

    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    return requiredRoles.includes(requestedUser.role);
  }
}
