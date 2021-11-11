type Id = string;
type Seller = string;

export type InvoiceItem = {
  productId: Id;
  title: string;
  price: number;
  quantity: number;
  sum: number;
  description: string;
}

export type Invoice = {
  id: Id;
  invoice: string;
  createdAt: Date;
  sum: number;
  count: number;
  seller: Seller;
  products: InvoiceItem[];
}
