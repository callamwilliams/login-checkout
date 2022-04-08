import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const productsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    reducerPath: 'productsApi',
    tagTypes: ['Products', 'Categories'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (build) => ({
        getAllCategories: build.query({
            query: () => ({
                url: `categories`,
            }),
            providesTags: ['Categories'],
        }),
        getCategoryData: build.query({
            query: (data) => ({ url: `/category/${data}` }),
            providesTags: ['Products'],
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryDataQuery,
    util: { getRunningOperationPromises },
} = productsApi;

export const { getAllCategories, getCategoryData } = productsApi.endpoints;
