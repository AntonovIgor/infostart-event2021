import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RouteMethod } from "../types/route-method";
import Controller from "../core/controller";

export default class InvoicesController extends Controller {
  path = '/invoices';
  routes = [
    {
      path: '/',
      method: RouteMethod.GET,
      handler: this.invoicesListHandle.bind(this),
      middlewares: [],
    },
    {
      path: '/:invoiceId',
      method: RouteMethod.GET,
      handler: this.invoiceHandle.bind(this),
      middlewares: [],
    }
  ];

  async invoicesListHandle(_req: Request, res: Response): Promise<void> {
    const invoices = await this.api.getInvoices();
    this.send(res, StatusCodes.OK, invoices);
  }

  async invoiceHandle(req: Request, res: Response): Promise<void> {
    const {invoiceId} = req.params;
    const invoice = await this.api.getInvoice(invoiceId);

    if (! invoice) {
      this.send(res, StatusCodes.NOT_FOUND);
      return;
    }

    this.send(res, StatusCodes.OK, invoice);
  }
}
