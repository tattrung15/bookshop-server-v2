import { Expose, Type } from "class-transformer";

export class LoginBodyUser {
  @Expose()
  id: number;

  @Expose()
  address: string;

  @Expose()
  amount: number;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  username: string;

  @Expose()
  phone: string;

  @Expose()
  role: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

export class LoginBody {
  @Expose()
  jwt: string;

  @Expose()
  @Type(() => LoginBodyUser)
  user: LoginBodyUser;
}
