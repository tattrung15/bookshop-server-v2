import { Expose } from "class-transformer";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CommonHeader {
  @IsNotEmpty()
  @Matches(/^Bearer[ ]+([^ ]+)[ ]*$/i)
  @IsString()
  @Expose({ name: "authorization" })
  authorization: string;
}

export class JwtPayload {
  id: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}
