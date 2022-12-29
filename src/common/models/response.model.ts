class ResponsePayload<T> {
  message: string;
  result: ResponseResult<T> | null;

  constructor(message: string, result: ResponseResult<T> | null = null) {
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
