import React from 'react';

import fetchMock from 'jest-fetch-mock';

import { mockData } from '../__mocks__/mockData';
import CategoriesPage from '../src/pages/[categories]';
import { productsApi, useGetAllCategoriesQuery } from '../src/store/api/products';
import { setupApiStore } from '../src/utils/setupApiStore';
import { render, screen, renderHook, fireEvent, waitFor } from '../test.render';

jest.mock('next/router', () => ({ push: jest.fn(), replace: jest.fn() }));
jest.mock('next-auth/react');
jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '',
            pathname: '',
            query: '',
            asPath: '',
        };
    },
}));

describe('Expect Categories Page', () => {
    it('to render successfully', async () => {
        render(<CategoriesPage />);
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
        expect(screen.getByText('...Loading')).toBeInTheDocument();
    });
    it('to render successfully', async () => {
        fetchMock.mockResponse(JSON.stringify(mockData.categories));
        render(<CategoriesPage />);
        expect(screen.getByText('...Loading')).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('electronics')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText('jewelery')).toBeInTheDocument();
        });
    });
});
