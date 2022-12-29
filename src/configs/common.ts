import * as dotenv from "dotenv";

dotenv.config();

export const Config = {
  APP_PORT: process.env.APP_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
};
