import faker from 'faker';
import { nanoid } from 'nanoid';
import { Product } from '../types/product';
import { FAKE_ID_LENGTH } from "../const";

export const fakeProducts: Product[] = [
  {
    id: nanoid(FAKE_ID_LENGTH),
    title: faker.commerce.product(),
    description: faker.lorem.paragraph(3),
  },
  {
    id: nanoid(FAKE_ID_LENGTH),
    title: faker.commerce.product(),
    description: faker.lorem.paragraph(3),
  }
];
