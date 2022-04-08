import { createAction } from '@reduxjs/toolkit';

import { IProduct } from '../../../interfaces/product';

export const ns = 'cart';

const addItemCart = createAction(`${ns}/addItemCart`, function prepare(product: IProduct) {
    return {
        payload: product,
    };
});

const removeItemCart = createAction(`${ns}/removeItemCart`, function prepare(id: number) {
    return {
        payload: id,
    };
});

export const cartActions = {
    addItemCart,
    removeItemCart,
};
