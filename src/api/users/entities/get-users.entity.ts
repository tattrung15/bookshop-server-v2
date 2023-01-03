import { Expose } from "class-transformer";

export class GetUsers {
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
