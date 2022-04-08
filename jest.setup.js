/* eslint-disable no-undef */
import fetchMock, { enableFetchMocks } from 'jest-fetch-mock';
// This will mock `next/dynamic`
import preloadAll from 'jest-next-dynamic';

// extend react-testing-library functionality
import '@testing-library/jest-dom/extend-expect';

enableFetchMocks();

beforeAll(async () => {
    preloadAll();
});

afterEach(() => fetchMock.resetMocks());

jest.mock('react-toastify', () => {
    // needed because your ToastContainer mock use jsx
    const React = require('react');
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {
        toast: jest.fn(),
        ToastContainer: jest.fn(() => <div />),
    });
    return actual;
});

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: () => {},
});

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

jest.mock(
    'next/link',
    () =>
        ({ children }) =>
            children
);
