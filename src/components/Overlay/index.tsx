import React from 'react';

import { Wrapper } from './styles';

interface OverlayProps {
    handleClick?: (event: any) => void;
    opacity?: number;
}

const Overlay: React.FC<OverlayProps> = ({ handleClick, children, opacity, ...props }) => (
    <Wrapper opacity={opacity} onClick={handleClick} data-testid="Overlay" {...props}>
        {children}
    </Wrapper>
);

export default Overlay;
