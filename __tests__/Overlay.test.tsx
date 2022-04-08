import React from 'react';

import { fireEvent, screen } from '@testing-library/react';

import Overlay from '../src/components/Overlay';
import { render } from '../test.render';

describe('Expect <Overlay>', () => {
    const handleClick = jest.fn();
    it('to render', () => {
        render(<Overlay handleClick={handleClick} />);
        expect(screen.getByTestId('Overlay')).toBeInTheDocument();
    });

    it('to fire event onClick', () => {
        render(<Overlay handleClick={handleClick} />);
        const node = screen.getByTestId('Overlay');
        fireEvent.click(node);
        expect(handleClick).toBeCalled();
    });
});
