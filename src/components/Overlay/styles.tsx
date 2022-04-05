import styled from 'styled-components';

export const Wrapper = styled.div<{ opacity: number }>`
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
    background: ${({ theme }) => theme.colors.neutral.white};
    z-index: 5;

    @media (min-width: ${({ theme }) => theme.viewport.md}) {
        top: 50%;
        bottom: auto;
        left: 50%;
        max-width: calc(100vw - 7.5rem);
        max-height: calc(80vh - 5rem);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        transform: translate(-50%, -50%);
    }
`;
