import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    margin: 0 auto;
    padding-top: 4rem;
`;

export const Page = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
`;

export const ContentWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    color: #ffffff;

    button {
        margin: 1.25rem 0;
    }
`;

export const Content = styled.section`
    background: #ffffff;
    width: 100%;
    max-width: 75rem;
    border-radius: 1.25rem;
    padding: 1.5rem;
`;

export const PinkButton = styled.button`
    padding: 0.75rem 2rem;
    color: #fff;
    background: #d613b6;
    border-radius: 0.25rem;
    font-weight: bold;
    cursor: pointer;
`;

export const GreenButton = styled(PinkButton)`
    background: #00c3b9;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
`;

export const VisuallyHidden = styled.span`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 0.0625rem;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 0.0625rem;
`;
