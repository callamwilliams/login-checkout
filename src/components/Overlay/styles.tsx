import styled from 'styled-components';

export const Wrapper = styled.div<{ opacity: number }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    max-height: 100vh;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: #333333;
    z-index: 5;
    opacity: ${({ opacity }) => (opacity ? opacity : 0.7)};
`;
