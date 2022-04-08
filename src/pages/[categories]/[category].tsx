import React from 'react';

import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import Link from 'next/link';

import Product from '../../components/Product';
import { ModalTypes } from '../../enums/ModalTypes';
import { Routes } from '../../enums/Routes';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetCategoryDataQuery } from '../../store/api/products';
import { getCartItems } from '../../store/selectors/cart';
import { modalActions } from '../../store/slices/modals/actions';
import { ContentWrapper, Content, PinkButton, Controls } from '../../styles/global';
import { ProductList } from '../../styles/pages/categories';
import { redirectUser } from '../../utils/redirectUser';

interface CategoriesPageProps {
    category: string;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ category }) => {
    const { data, isFetching } = useGetCategoryDataQuery(category);
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(getCartItems);
    return (
        <ContentWrapper>
            <Controls>
                <Link href="/categories">
                    <a title="Go Back">Go Back</a>
                </Link>
                <PinkButton type="button" onClick={() => dispatch(modalActions.setActiveModal(ModalTypes.Cart))}>
                    Cart ({cartItems.length})
                </PinkButton>
            </Controls>
            <Content>
                {isFetching ? (
                    '...Loading'
                ) : (
                    <ProductList>
                        {data?.map((item) => (
                            <Product key={item.id} item={item} />
                        ))}
                    </ProductList>
                )}
            </Content>
        </ContentWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) redirectUser(ctx, Routes.INDEX);
    return {
        props: {
            category: ctx.params.category,
        },
    };
};

export default CategoriesPage;
