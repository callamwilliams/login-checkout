import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import 'normalize.css';
import '../styles/core.css';
import BasicModal from '../components/Modals/BasicModal';
import ModalContainer from '../components/Modals/ModalContainer';
import Overlay from '../components/Overlay';
import { ModalTypes } from '../enums/ModalTypes';
import { wrapper } from '../store/configureStore';
import { getActiveModal } from '../store/selectors/modals';
import { GlobalStyle, Main, Page } from '../styles/global';

const modals = [
    {
        modal: BasicModal,
        id: ModalTypes.Basic,
    },
];

const App = ({ Component, pageProps }: AppProps) => {
    const activeModal = useSelector(getActiveModal);

    return (
        <>
            <Head>
                <title>NextJS Starter</title>
                <meta name="description" content="" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#24249B" />
                <meta property="og:title" content="" key="title" />
                <meta name="theme-color" content="#24249B" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, minimum-scale=1"
                />
            </Head>

            <ThemeProvider theme={{}}>
                <GlobalStyle />
                <header>header</header>
                <Page>
                    <Main>
                        <Component {...pageProps} />
                    </Main>
                    <footer>footer</footer>
                </Page>

                <ModalContainer modals={modals} />
                {activeModal ? <Overlay /> : null}
                <div id="modal-container" />
            </ThemeProvider>
        </>
    );
};

export default wrapper.withRedux(withRouter(App));
