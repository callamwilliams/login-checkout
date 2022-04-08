import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { productsApi } from './api/products';

import { reducer } from './index';

export const makeStore = () =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend().concat(productsApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore, { debug: false });
