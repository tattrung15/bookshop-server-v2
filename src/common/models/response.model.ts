class ResponsePayload<T> {
  statusCode: number;
  message: string;
  result: ResponseResult<T> | null;

  constructor(
    result: ResponseResult<T> | null = null,
    message = "Request success.",
    statusCode = 200,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.result = result;
  }
}

type ResponseResult<T> = {
  data: T | null;
  pagination?: Pagination;
};

type Pagination = {
  page: number;
  perPage: number;
  lastPage?: number;
  total?: number;
};

export { ResponsePayload, Pagination };
