import { IsInt, Min } from "@/common/decorators/validator.decorator";
import { Expose, Transform } from "class-transformer";
import { IsOptional } from "class-validator";

export class GetUsersQueryDto {
  @Expose()
  @IsInt()
  @Min(1)
  @IsOptional()
  @Transform(
    ({ value }) => (value && value.match(/\d+/) ? Number(value) : value),
    {
      toClassOnly: true,
    },
  )
  page: number;

  @Expose()
  @IsInt()
  @Min(1)
  @IsOptional()
  @Transform(
    ({ value }) => (value && value.match(/\d+/) ? Number(value) : value),
    {
      toClassOnly: true,
    },
  )
  perPage: number;
}
