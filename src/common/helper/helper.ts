import { PAGING_DEFAULT_LIMIT } from "../constants/constants";
import { Pagination, ResponsePayload } from "../models/response.model";

export const getResponse = <T>(
  data: T,
  pagination?: Pagination,
  message = "Request success.",
) => {
  if (pagination) {
    return new ResponsePayload({ data, pagination }, message);
  }
  return new ResponsePayload({ data }, message);
};

export const getPagination = (
  page: number,
  perPage: number,
  count: number,
): Pagination => {
  const validPage = page > 0 ? page : 1;
  let validLimit = perPage > 0 ? perPage : PAGING_DEFAULT_LIMIT;

  validLimit = validLimit < count ? validLimit : count;
  const lastPage = count < validLimit ? 1 : Math.ceil(count / validLimit);
  return {
    page: validPage,
    perPage: validLimit,
    lastPage,
    total: count,
  };
};
