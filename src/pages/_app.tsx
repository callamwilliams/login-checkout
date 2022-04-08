import React from 'react';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';

import 'normalize.css';
import '../styles/core.css';
import CartModal from '../components/Modals/CartModal';
import ModalContainer from '../components/Modals/ModalContainer';
import Overlay from '../components/Overlay';
import { ModalTypes } from '../enums/ModalTypes';
import { useAppSelector } from '../store';
import { wrapper } from '../store/configureStore';
import { getActiveModal } from '../store/selectors/modals';
import { Main, Page } from '../styles/global';
import 'react-toastify/dist/ReactToastify.css';

const modals = [
    {
        modal: CartModal,
        id: ModalTypes.Cart,
    },
];

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
    const activeModal = useAppSelector(getActiveModal);

    return (
        <>
            <Head>
                <title>Login Checkout</title>
                <meta name="description" content="" />
                <meta property="og:title" content="" key="title" />
                <meta name="theme-color" content="#24249B" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, minimum-scale=1"
                />
            </Head>

            <SessionProvider session={session}>
                <Page>
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                </Page>
                <ModalContainer modals={modals} />
                {activeModal ? <Overlay /> : null}
            </SessionProvider>
        </>
    );
};

export default wrapper.withRedux(withRouter(App));
