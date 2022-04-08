import React from 'react';

import { screen } from '@testing-library/react';

import CartModal from '../src/components/Modals/CartModal';
import { fireEvent, render } from '../test.render';

describe('Expect <Modal>', () => {
    it('to render', () => {
        render(
            <CartModal>
                <h1>Hello</h1>
            </CartModal>
        );
        expect(screen.getByText('Empty Cart')).toBeInTheDocument();
    });
    it('to show products', () => {
        render(<CartModal />, {
            preloadedState: {
                modals: {
                    activeModal: 1,
                },
                cart: {
                    items: [
                        {
                            id: 9,
                            title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
                            price: 64,
                            description:
                                'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
                            category: 'electronics',
                            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
                            rating: {
                                rate: 3.3,
                                count: 203,
                            },
                        },
                    ],
                },
            },
        });
        expect(screen.getByText('Cart')).toBeInTheDocument();
        expect(screen.getByText('Remove from cart')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Remove from cart'));
        expect(screen.getByText('Empty Cart')).toBeInTheDocument();
    });
});
