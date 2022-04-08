import React from 'react';

import { useAppSelector } from '../../store';
import { getCartItems } from '../../store/selectors/cart';
import Product from '../Product';
import { Cart, CartItem } from './styles';

const CartModal: React.FC = () => {
    const cartItems = useAppSelector(getCartItems);

    return (
        <Cart>
            <h2>Cart</h2>
            {cartItems.length ? (
                cartItems?.map((item) => (
                    <CartItem key={item.id}>
                        <Product item={item} cart />
                    </CartItem>
                ))
            ) : (
                <>
                    <h3>Empty Cart</h3>
                    <p>Buy something!</p>
                </>
            )}
        </Cart>
    );
};

export default CartModal;
