import {nanoid} from "nanoid";
import faker from "faker";
import { Invoice } from "../types/invoice";
import { FAKE_ID_LENGTH } from "../const";

export const fakeInvoices: Invoice[] = [
  {
    id: nanoid(FAKE_ID_LENGTH),
    invoice: 'ТДРТ-000014',
    createdAt: faker.date.recent(2),
    sum: 10000,
    count: 2,
    seller: faker.name.findName(),
    products: [
      {
        productId: nanoid(FAKE_ID_LENGTH),
        title: faker.animal.cat(),
        price: 4000,
        quantity: 1,
        sum: 4000,
        description: faker.lorem.paragraphs(4),
      },
      {
        productId: nanoid(FAKE_ID_LENGTH),
        title: faker.animal.dog(),
        price: 6000,
        quantity: 1,
        sum: 6000,
        description: faker.lorem.paragraphs(1),
      }
    ]
  },
  {
    id: nanoid(FAKE_ID_LENGTH),
    invoice: 'ТДРТ-000015',
    createdAt: faker.date.recent(4),
    sum: 4000,
    count: 2,
    seller: faker.name.findName(),
    products: [
      {
        productId: nanoid(FAKE_ID_LENGTH),
        title: faker.animal.cat(),
        price: 1000,
        quantity: 1,
        sum: 1000,
        description: faker.lorem.paragraphs(2),
      },
      {
        productId: nanoid(FAKE_ID_LENGTH),
        title: faker.animal.dog(),
        price: 1000,
        quantity: 3,
        sum: 3000,
        description: faker.lorem.paragraphs(1),
      }
    ]
  },
  {
    id: nanoid(FAKE_ID_LENGTH),
    invoice: 'ТДРТ-000016',
    createdAt: faker.date.recent(1),
    sum: 2000,
    count: 1,
    seller: faker.name.findName(),
    products: [
      {
        productId: nanoid(FAKE_ID_LENGTH),
        title: faker.animal.cat(),
        price: 2000,
        quantity: 1,
        sum: 2000,
        description: faker.lorem.paragraphs(3),
      },
    ]
  }
]
