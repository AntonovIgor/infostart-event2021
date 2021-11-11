import { Router, Response } from "express";
import { RouteMethod } from "../types/route-method";
import { Route } from "../types/route";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import FakeBackend from "../services/fake-backend";

export default abstract class Controller {
  protected abstract readonly routes: Array<Route>;
  protected api: FakeBackend = new FakeBackend();
  public router: Router = Router();
  public abstract path: string;

  protected send(res: Response, code: StatusCodes = StatusCodes.OK, data?: object, message?: string): Response {
    return res.status(code).json({
      message: message || getReasonPhrase(code),
      data: data ?? {},
    });
  }

  public setRoutes(): Router {
    this.routes.forEach((route) => {

      route.middlewares.forEach((middleware) => {
        this.router.use(route.path, middleware);
      });

      switch (route.method) {
        case RouteMethod.GET:
          this.router.get(route.path, route.handler);
          break;
        case RouteMethod.POST:
          this.router.post(route.path, route.handler);
          break;
        case RouteMethod.DELETE:
          this.router.delete(route.path, route.handler);
          break;
        default:
          throw new Error('This method not supported');
      }
    });

    return this.router;
  }
}
