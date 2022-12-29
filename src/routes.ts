import { Routes } from "@nestjs/core";
import { AUTH_ROUTES } from "./api/auth/auth.routes";

export const routes: Routes = [...AUTH_ROUTES];
