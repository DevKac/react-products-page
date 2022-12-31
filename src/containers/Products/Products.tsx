import React, { ReactElement, useMemo, useState } from 'react';

import { SortDirection } from '../../domain/enums/sortDirection';
import { useGetProductsWithLimitQuery } from '../../services/products';
import ProductTilesContainer from '../../components/ProductTilesContainer/ProductTilesContainer';
import LoadingState from '../../components/LoadingState/LoadingState';
import ErrorState from '../../components/ErrorState/ErrorState';
import { Product } from '../../domain/interfaces/product';
import { filterProductsByTitle, sortProductsByTitle } from '../../helpers/productsList/productsList';
import { AvailableLimits } from '../../config/uiConfig';
import ProductControlsContainer from '../../components/ProductControlsContainer/ProductControlsContainer';

function Products() {
  const [currentFilterQuery, setCurrentFilterQuery] = useState<string>('');
  const [currentSortDirection, setCurrentSortDirection] = useState<SortDirection>(SortDirection.ASCENDING);
  const [currentLimit, setCurrentLimit] = useState<number>(AvailableLimits[0]);
  const { data, error, isLoading, isSuccess, isError } = useGetProductsWithLimitQuery(currentLimit);

  const processedProducts: Product[] = useMemo(() => {
    if (!data?.products) {
      return [];
    }
    
    const filteredProducts: Product[] = filterProductsByTitle(data.products, currentFilterQuery);
    const filteredAndSortedProducts: Product[] = sortProductsByTitle(filteredProducts, currentSortDirection);
  
    return filteredAndSortedProducts
  }, [data?.products, currentSortDirection, currentFilterQuery])
  
  function getProductsState(): ReactElement {
    if (isLoading) {
      return <LoadingState />
    } else if (isSuccess) {
      return <ProductTilesContainer products={processedProducts} />
    } else if (isError) {
      return <ErrorState errorMsg={error?.toString()} />
    } else {
      return <LoadingState />
    }
  }

  return (
    <React.Fragment>
      { isSuccess && <ProductControlsContainer
        currentSortDirection={currentSortDirection} sortElementsFn={setCurrentSortDirection}
        filterElementsFn={setCurrentFilterQuery}
        availableLimits={AvailableLimits} currentLimit={currentLimit} selectLimitFn={setCurrentLimit}
      /> }

      { getProductsState() }
    </React.Fragment>
  );
}

export default Products;
