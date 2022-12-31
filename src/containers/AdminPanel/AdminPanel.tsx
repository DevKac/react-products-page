import React from 'react';

import { useAddNewProductMutation } from '../../services/products';
import { Product } from '../../domain/interfaces/product';
import AddProductForm from '../../components/AddProductForm/AddProductForm';

function AdminPanel() {
  const [addNewProduct, { isLoading }] = useAddNewProductMutation();

  function handleAddNewProduct(newProduct: Product): void {
    if (!newProduct) {
      console.error('AdminPanel: handleAddNewProduct: newProduct is null or undefined');
      return;
    }

    addNewProduct(newProduct)
    .unwrap()
    .then((payload) => console.log('fulfilled', payload))
    .catch((error) => console.error('rejected', error))
  }

  return (
    <React.Fragment>
      <AddProductForm isSaving={isLoading} addProductFn={handleAddNewProduct} />
    </React.Fragment>
  );
}

export default AdminPanel;
