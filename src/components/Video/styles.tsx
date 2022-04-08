import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    inset: 0 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;

    video {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }
`;
