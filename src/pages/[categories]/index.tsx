import React from 'react';

import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import Link from 'next/link';

import { ModalTypes } from '../../enums/ModalTypes';
import { Routes } from '../../enums/Routes';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetAllCategoriesQuery } from '../../store/api/products';
import { getCartItems } from '../../store/selectors/cart';
import { modalActions } from '../../store/slices/modals/actions';
import { ContentWrapper, Content, PinkButton, Controls } from '../../styles/global';
import { List, ListItem } from '../../styles/pages/categories';
import { redirectUser } from '../../utils/redirectUser';

const CategoriesPage: React.FC = () => {
    const { data, isFetching } = useGetAllCategoriesQuery({});
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(getCartItems);
    return (
        <ContentWrapper>
            <Controls>
                <button type="button" onClick={() => signOut()}>
                    Sign Out
                </button>

                <PinkButton type="button" onClick={() => dispatch(modalActions.setActiveModal(ModalTypes.Cart))}>
                    Cart ({cartItems.length})
                </PinkButton>
            </Controls>
            <Content>
                <List>
                    {isFetching
                        ? '...Loading'
                        : data?.map((category) => (
                              <ListItem key={category.replaceAll(' ', '')}>
                                  <Link href={`category/${category}`}>
                                      <a title={category}>{category}</a>
                                  </Link>
                              </ListItem>
                          ))}
                </List>
            </Content>
        </ContentWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) redirectUser(ctx, Routes.INDEX);

    return {
        props: {},
    };
};

export default CategoriesPage;
