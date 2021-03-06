import { NextRouter } from 'next/router';

export const mockRouter: NextRouter = {
    defaultLocale: '',
    isLocaleDomain: false,
    domainLocales: undefined,
    isPreview: false,
    isReady: false,
    locale: '',
    locales: [],
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
};
