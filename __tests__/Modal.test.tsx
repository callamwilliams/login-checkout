import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import Modal from '../src/components/Modals';
import { render } from '../test.render';

describe('Expect <Modal>', () => {
    const handleClose = jest.fn();

    it('to render', () => {
        render(
            <Modal show handleClose={handleClose}>
                <h1>Hello</h1>
            </Modal>
        );
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    it('to fire event on cross click', () => {
        render(
            <Modal show handleClose={handleClose}>
                <h1>Hello</h1>
            </Modal>
        );
        const node = screen.getByTestId('modal-close');
        fireEvent.click(node);
        expect(handleClose).toBeCalled();
    });

    it('to not render if show=false', () => {
        render(
            <Modal show={false} handleClose={handleClose}>
                <h1>Hello</h1>
            </Modal>
        );
        expect(screen.queryByText('Hello')).not.toBeInTheDocument();
    });
});
