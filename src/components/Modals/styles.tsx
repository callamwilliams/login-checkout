import styled from 'styled-components';

export const Heading = styled.h2<{ theme }>`
    padding: 1.5625rem 0;
    margin: 0;
    border-radius: 0.625rem 0.625rem 0 0;
`;

export const Wrapper = styled.div<{ maxWidth: string }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-height: 50vh;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: #ffffff;
    z-index: 5;

    @media (min-width: 50.0625rem) {
        top: 50%;
        bottom: auto;
        left: 50%;
        max-width: ${({ maxWidth }) => maxWidth || 'calc(100vw - 7.5rem)'};
        max-height: calc(80vh - 5rem);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        transform: translate(-50%, -50%);
    }
`;

export const Close = styled.div`
    position: relative;
    display: flex;
    margin-left: auto;
    padding: 1.5625rem 1.5rem 1.5625rem 0;
    cursor: pointer;
`;

export const Inner = styled.div`
    padding: 0 1.5rem 2.5rem;
    overflow-y: auto;
`;

export const Cart = styled.div``;

export const CartItem = styled.div`
    h3 {
        font-size: 1rem;
        line-height: 1.25rem;
    }
`;
