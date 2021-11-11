import { Application, RequestHandler } from "express";
import {Server as HttpServer} from "http";
import Controller from "./controller";

export default class Server {
  private application: Application;
  private readonly port: number;

  constructor(application: Application, port: number) {
    this.application = application;
    this.port = port;
  }

  public start(): HttpServer {
    return this.application.listen(this.port, () => {
      console.info(`Server running on the port ${this.port}`);
    });
  }

  public registerMiddlewares(middlewares: RequestHandler[]): void {
    middlewares.forEach((middleware) => {
      this.application.use(middleware);
    });
  }

  public registerControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.application.use(controller.path, controller.setRoutes());
    });
  }
}
