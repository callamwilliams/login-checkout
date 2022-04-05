import React, { useEffect } from 'react';
import { Wrapper, Close, Inner } from './styles';

interface ModalProps {
    show: boolean;
    children: React.ReactChild;
    handleClose: () => void;
    maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({ show, children, maxWidth, handleClose, ...props }) => {
    const handleKeyPress = ({ keyCode }) => {
        if (keyCode === 27) {
            handleClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return show ? (
        <Wrapper role="dialog" aria-modal="true" maxWidth={maxWidth} data-testid="modal" {...props}>
            <Close aria-label="Close Modal" data-testid="modal-close" onClick={() => handleClose()}>
                X
            </Close>
            <Inner>{children}</Inner>
        </Wrapper>
    ) : null;
};

export default Modal;
