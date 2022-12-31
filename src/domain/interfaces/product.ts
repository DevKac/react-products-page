export interface Product {
  id: number;
  brand?: string;
  category?: string;
  description: string;
  discountPercentage?: string;
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title: string;
  images?: string[];
}
