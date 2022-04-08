import React from 'react';

import Image from 'next/image';

import { ModalTypes } from '../../enums/ModalTypes';
import { IProduct } from '../../interfaces/product';
import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/slices/cart/actions';
import { modalActions } from '../../store/slices/modals/actions';
import { GreenButton, PinkButton } from '../../styles/global';
import Star from '../Star';
import { Wrapper, ImageWrapper, Detail, Rating } from './styles';

interface ProductProps {
    item: IProduct;
    cart?: boolean;
}

const Product: React.FC<ProductProps> = ({ item, cart }) => {
    const { id, image, title, price, description, rating } = item;

    const dispatch = useAppDispatch();

    const handleAdd = (product) => {
        dispatch(modalActions.setActiveModal(ModalTypes.Cart));
        dispatch(cartActions.addItemCart(product));
    };

    const handleRemove = (productId) => {
        dispatch(modalActions.setActiveModal(ModalTypes.None));
        dispatch(cartActions.removeItemCart(productId));
    };

    return (
        <Wrapper key={`product_${id}`}>
            {!cart && (
                <ImageWrapper>
                    <Image src={image} layout="fill" objectFit="cover" alt={title} />
                </ImageWrapper>
            )}
            <Detail>
                <h3>{title}</h3>
                <span>£{price}</span>
                {!cart && (
                    <>
                        <p>{description}</p>
                        <Rating>
                            <Star count={Math.round(rating.rate)} />({rating.count})
                        </Rating>

                        <GreenButton type="button" onClick={() => handleAdd(item)}>
                            Add to cart
                        </GreenButton>
                    </>
                )}
                {cart && (
                    <PinkButton type="button" onClick={() => handleRemove(id)}>
                        Remove from cart
                    </PinkButton>
                )}
            </Detail>
        </Wrapper>
    );
};

export default Product;
