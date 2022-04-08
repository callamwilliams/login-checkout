import { createSlice } from '@reduxjs/toolkit';

import { cartActions } from './actions';

export const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(cartActions.addItemCart, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(cartActions.removeItemCart, (state, action) => {
                const cartWithOutItem = state.items.filter((product) => product.id !== action.payload);
                state.items = cartWithOutItem;
            });
    },
});

export default cartSlice.reducer;
