import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const RequestedUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request: Request = context.switchToHttp().getRequest();
    return request.body.user;
  },
);
