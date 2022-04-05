import React from 'react';
import { GetServerSideProps } from 'next';

import { Wrapper} from '../styles/pages';

const HomePage: React.FC = () => {

    return (
        <Wrapper data-testid="home-page">
        </Wrapper>
    );
};



export default HomePage;
