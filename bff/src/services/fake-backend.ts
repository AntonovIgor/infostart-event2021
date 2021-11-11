import { fakeInvoices } from "../mocks/fake-invoices";
import { fakeProducts } from "../mocks/fake-favorites";
import { setTimeout } from "timers/promises";

const DELAY = 1000;

export default class FakeBackend {
  async getInvoices() {
    const invoices = await setTimeout(DELAY, fakeInvoices);
    return invoices;
  }

  async getProducts() {
    return fakeInvoices.flatMap((item) => (
      item.products.map(({productId: id, title, description}) => ({
        id,
        title,
        description
      }))));
  }

  async getInvoice(id: string) {
    const invoices = await setTimeout(DELAY, fakeInvoices);
    return invoices.find((invoice) => invoice.id === id);
  }

  async getFavoriteProducts() {
    const favoriteProducts = await setTimeout(DELAY, fakeProducts);
    return favoriteProducts;
  }

  async addProductToFavorite(productId: string) {
    const products = await this.getProducts();
    const existProduct = products.find(({id}) => id === productId);

    if (! existProduct) {
      throw new Error('Product not found');
    }

    fakeProducts.push(existProduct);
    return existProduct;
  }

  async deleteProductFromFavorites(_productId:string) {
    throw new Error('Not implemented');
  }
}
