const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-svgr');

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
    },
];

module.exports = withPlugins(
    [
        [
            withBundleAnalyzer,
            {
                openAnalyzer: false,
            },
        ],
        [
            withSvgr,
            {
                removeDimensions: true,
            },
        ],
    ],
    {
        reactStrictMode: true,
        poweredByHeader: false,
        async headers() {
            return [
                {
                    source: '/(.*)',
                    headers: securityHeaders,
                },
            ];
        },
        serverRuntimeConfig: {},
        publicRuntimeConfig: {},
        env: {
            NEXTAUTH_URL: 'https://localhost:3000/api/auth',
        },
        images: {
            domains: ['localhost', 'fakestoreapi.com'],
        },
        experimental: {
            outputStandalone: true,
        },
        eslint: { ignoreDuringBuilds: true },
        typescript: { ignoreBuildErrors: true },
    }
);
