import { Request, Response } from "express";
import { RouteMethod } from "../types/route-method";
import Controller from "../core/controller";
import { StatusCodes } from "http-status-codes";
import { Product } from "../types/product";

export default class FavoriteController extends Controller {
  path = '/favorites';
  routes = [
    {
      path: '/',
      method: RouteMethod.GET,
      handler: this.listHandle.bind(this),
      middlewares: [],
    },
    {
      path: '/:productId',
      method: RouteMethod.POST,
      handler: this.addHandle.bind(this),
      middlewares: [],
    },
    {
      path: '/:productId',
      method: RouteMethod.DELETE,
      handler: this.deleteHandle.bind(this),
      middlewares: [],
    }
  ];

  async addHandle(req: Request, res: Response): Promise<void> {
    const {productId} = req.params;
    let product: Product;

    try {
      product = await this.api.addProductToFavorite(productId);
    } catch (error: unknown) {
      this.send(res, StatusCodes.NOT_FOUND, error as Error);
      return;
    }

    this.send(res, StatusCodes.CREATED, product);
  }

  async listHandle(_req: Request, res: Response): Promise<void> {
    const products = await this.api.getFavoriteProducts();
    this.send(res, StatusCodes.OK, products);
  }

  async deleteHandle(req: Request, res: Response): Promise<void> {
    const {productId} = req.params;
    this.api.deleteProductFromFavorites(productId);
    this.send(res, StatusCodes.NO_CONTENT);
  }
}
