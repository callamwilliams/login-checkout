import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const providers = [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const payload = {
                    username: credentials.username,
                    password: credentials.password,
                };

                const response = await fetch('https://fakestoreapi.com/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status > 300) {
                    const error = await response.text();
                    return Promise.reject(new Error(`${error.replaceAll(' ', '-')}`));
                }
                const user = await response.json();
                return Promise.resolve(user);
            },
        }),
    ];

    return await NextAuth(req, res, {
        providers,
        debug: true,
        pages: {
            error: '/',
        },
        secret: 'secret',
        session: {
            strategy: 'jwt',
        },
    });
}
