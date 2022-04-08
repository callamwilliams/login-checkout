import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

export const Header = styled.header`
    width: 100%;
    text-align: center;
    h1 {
        margin: 0 auto 1.25rem;
    }
`;

export const LoginForm = styled.form`
    background: #ffffff;
    width: 100%;
    max-width: 50rem;
    border-radius: 1.25rem;
    padding: 1.5rem;
`;

export const FormItem = styled.div`
    margin-bottom: 1.25rem;
`;

export const LoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2rem auto 1.5rem;
`;

export const ErrorMessage = styled.p`
    color: #ea2b2b;
`;

export const Authenticating = styled.p`
    display: flex;
    margin: 0;
    span {
        display: table-cell;
        animation: stepping 1.2s infinite;
    }
    @keyframes stepping {
        0% {
            transform: translateY(-0.1875rem);
        }

        50% {
            transform: translateY(0px);
        }

        100% {
            transform: translateY(-0.1875rem);
        }
    }
    span:nth-child(1) {
        animation-delay: 0s;
    }
    span:nth-child(2) {
        animation-delay: 0.1s;
    }
    span:nth-child(3) {
        animation-delay: 0.2s;
    }
    span:nth-child(4) {
        animation-delay: 0.3s;
    }
    span:nth-child(5) {
        animation-delay: 0.4s;
    }
`;
