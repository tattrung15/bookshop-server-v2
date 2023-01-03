import { Routes } from "@nestjs/core";
import { AUTH_ROUTES } from "./api/auth/auth.routes";
import { USERS_ROUTES } from "./api/users/users.routes";

export const routes: Routes = [...AUTH_ROUTES, ...USERS_ROUTES];
