import express, { Application, urlencoded, json } from 'express';
import cors from "cors";
import Server from './core/server';
import FavoriteController from './controllers/favorite-controller';
import { PORT } from './conf';
import InvoicesController from './controllers/invoces-controller';

const app: Application = express();
const server: Server = new Server(app, PORT);

server.registerMiddlewares([
  json(),
  urlencoded({ extended: false }),
  cors({ credentials: true, origin: true }),
]);

server.registerControllers([
  new InvoicesController(),
  new FavoriteController(),
]);


server.start();
