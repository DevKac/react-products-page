import { SortDirection } from '../../domain/enums/sortDirection';
import { Product } from '../../domain/interfaces/product';

export function filterProductsByTitle(products: Product[], searchedTitle: string): Product[] {
  if (!products || !searchedTitle) {
    return products;
  }

  return products.filter((product: Product) => {
    if (!product?.title) {
      return false;
    }

    return product.title.toUpperCase().includes(searchedTitle.trim().toUpperCase());
  });
}

export function sortProductsByTitle(products: Product[], sortDirection: SortDirection): Product[] {
  if (!products || !sortDirection) {
    return products;
  }

  const sortedProducts = products.slice()
  sortedProducts.sort((productA: Product, productB: Product) => {
    if (!productA || !productB) {
      return 0;
    }
    if (productB.title < productA.title) {
      return sortDirection === SortDirection.DESCENDING ? -1 : 1;
    }
    if (productB.title > productA.title) {
      return sortDirection === SortDirection.DESCENDING ? 1 : -1;
    }
  
    return 0;
  });

  return sortedProducts;
}
