import { IoAdapter } from "@nestjs/platform-socket.io";
import { NextFunction } from "express";
import { Server, ServerOptions, Socket } from "socket.io";

export class SocketAdapter extends IoAdapter {
  createIOServer(port: number, options?: ServerOptions): Server {
    const server: Server = super.createIOServer(port, options);

    server.use((socket: Socket, next: NextFunction) => {
      next();
    });

    return server;
  }
}
