import { Product } from './product';

export interface ProductsResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
