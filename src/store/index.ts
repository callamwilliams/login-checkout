import { AsyncThunk } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import { productsApi } from './api/products';
import { AppStore } from './configureStore';
import cartSlice from './slices/cart/slice';
import modalsSlice from './slices/modals/slice';

export const reducer = combineReducers({
    [productsApi.reducerPath]: productsApi.reducer,
    modals: modalsSlice,
    cart: cartSlice,
});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore['dispatch'];

export type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export const initialState: Record<string, string> = {};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
