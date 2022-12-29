import { IsString } from "@/common/decorators/validator.decorator";

export class LoginBodyDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
