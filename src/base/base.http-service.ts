import autoBind from "auto-bind";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BaseHttpResponse } from "./base.type";

class BaseHttpService<T> {
  protected baseURL = "";

  constructor(baseURL = "") {
    this.baseURL = baseURL;
    autoBind(this);
  }

  public async post(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<BaseHttpResponse<T>> {
    const data = await this.request(HttpMethod.POST, url, options);
    return data;
  }

  public async get(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<BaseHttpResponse<T>> {
    const data = await this.request(HttpMethod.GET, url, options);
    return data;
  }

  public async put(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<BaseHttpResponse<T>> {
    const data = await this.request(HttpMethod.PUT, url, options);
    return data;
  }

  public async delete(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<BaseHttpResponse<T>> {
    const data = await this.request(HttpMethod.DELETE, url, options);
    return data;
  }

  public async request(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<BaseHttpResponse<T>> {
    try {
      const response = await axios.request<T>({
        method,
        baseURL: this.getBaseURL(),
        url,
        ...options,
      });
      return {
        headers: response.headers,
        data: response.data,
      };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      throw error;
    }
  }

  protected getBaseURL(): string {
    return "";
  }
}

enum HttpMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export default BaseHttpService;
