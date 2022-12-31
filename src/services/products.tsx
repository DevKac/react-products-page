import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from '../domain/interfaces/product';
import { ProductsResponse } from '../domain/interfaces/productsResponse';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => `products`,
    }),
    getProductsWithLimit: builder.query<ProductsResponse, number>({
      query: (limit: number) => `products?limit=${ limit }`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct: Product) => ({
        url: 'products/add',
        method: 'POST',
        body: newProduct
      })
    })
  }),
})

export const { useGetProductsQuery, useGetProductsWithLimitQuery, useAddNewProductMutation } = productsApi
