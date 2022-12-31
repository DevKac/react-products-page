import React from 'react';

import './ProductTile.scss';
import { Product } from '../../domain/interfaces/product';

interface ProductTileProps {
  product: Product;
}

function ProductTile({product}: ProductTileProps) {
  return (
    <React.Fragment>
      { product && <div className='tile-container'>
        <img src={product.thumbnail} alt={`${ product.title } thumbnail`} className='tile-image' />
        <div className='tile-text'>
          <div className='tile-title'>{ product.title }</div>
          <div>{ product.description }</div>
        </div>
      </div> }
    </React.Fragment>
  );
}

export default ProductTile;
