import { RouteMethod } from './route-method';
import { NextFunction, Request, Response } from 'express';

export type Route = {
  path: string;
  method: RouteMethod;
  handler: (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
  middlewares: ((req: Request, res: Response, next: NextFunction) => void)[];
}
