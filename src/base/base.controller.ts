import { Pagination, ResponsePayload } from "@/common/models/response.model";
import autoBind from "auto-bind";
import express from "express";

class BaseController {
  protected defaultSuccessMsg = "Request success.";
  protected name: string;

  constructor(name: string) {
    this.name = name;
    autoBind(this);
  }

  protected success<T>(req: express.Request, res: express.Response) {
    return (data?: T, message?: string): void => {
      const finalMessage = message || this.defaultSuccessMsg;
      const finalData = data ? { data } : { data: null };
      const responsePayload = new ResponsePayload<T>(finalMessage, finalData);
      res.status(200).send(responsePayload);
    };
  }

  protected paginate<T>(req: express.Request, res: express.Response) {
    return (data: T, pagination: Pagination, message?: string): void => {
      const finalMessage = message || this.defaultSuccessMsg;
      const finalData = { data, pagination };
      const responsePayload = new ResponsePayload<T>(finalMessage, finalData);
      res.status(200).send(responsePayload);
    };
  }
}

export default BaseController;
