import React from 'react';

import fetchMock from 'jest-fetch-mock';

import { mockData } from '../__mocks__/mockData';
import Category from '../src/pages/[categories]/[category]';
import { fireEvent, render, screen, waitFor } from '../test.render';

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
        render(<Category category={'electronics'} />);
        expect(screen.getByText('Go Back')).toBeInTheDocument();
        expect(screen.getByText('...Loading')).toBeInTheDocument();
    });
    it('to render successfully', async () => {
        fetchMock.mockResponse(JSON.stringify(mockData.products.electronics));
        render(<Category category={'electronics'} />);
        expect(screen.getByText('...Loading')).toBeInTheDocument();
        await waitFor(() => {
            expect(
                screen.getByText('Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5')
            ).toBeInTheDocument();
        });
    });
    it('to add to basket', async () => {
        fetchMock.mockResponse(JSON.stringify(mockData.products.electronics));
        render(<Category category={'electronics'} />);
        expect(screen.getByText('...Loading')).toBeInTheDocument();
        await waitFor(() => {
            expect(
                screen.getByText('WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive')
            ).toBeInTheDocument();
        });
        fireEvent.click(screen.getAllByText('Add to cart')[0]);
        await waitFor(() => {
            expect(
                screen.getByRole('button', {
                    name: /cart \(1\)/i,
                })
            ).toBeInTheDocument();
        });
    });
});
