import React from 'react';

import HomePage from '../src/pages';
import { render, screen, fireEvent, waitFor } from '../test.render';

jest.mock('next/router', () => ({
    push: jest.fn(),
    replace: jest.fn(),
    useRouter() {
        return {
            route: '',
            pathname: '',
            query: { error: 'test-error' },
            asPath: '',
        };
    },
}));
jest.mock('next-auth/react');

describe('Expect Home Page', () => {
    it('to render successfully', async () => {
        render(<HomePage />);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Username')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    it('validates form', async () => {
        render(<HomePage />);
        fireEvent.submit(screen.getByText('Submit'));
        await waitFor(() => {
            expect(screen.getByText('Please enter a valid username')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Please fill in this field')).toBeInTheDocument();
        });
    });
    it('validates response', async () => {
        render(<HomePage />);
        await waitFor(() => {
            expect(screen.getByText('test-error')).toBeInTheDocument();
        });
    });
});
