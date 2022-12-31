import './ProductTilesContainer.scss';
import { Product } from '../../domain/interfaces/product';
import ProductTile from '../ProductTile/ProductTile';
import ProductTilesEmpty from '../ProductTilesEmpty/ProductTilesEmpty';

interface ProductTilesContainerProps {
  products: Product[];
}

function ProductTilesContainer({ products }: ProductTilesContainerProps) {
  return (
    <div className='product-tiles-container'>
      { products?.length ?
        products.map((product: Product) => <ProductTile key={product.id} product={product}/>) :
        <ProductTilesEmpty />
      }
    </div>
  );
}

export default ProductTilesContainer;
