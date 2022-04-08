import { RefObject } from 'react';

import styled from 'styled-components';

export const Wrapper = styled.div<{ error?: boolean; disabled?: boolean }>`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: ${({ disabled }) => (disabled ? '#EFF0F6' : '#ffffff')};
    border: 0.0625rem solid ${({ error }) => (error ? '#EA2B2B' : '#D9DBE9')};
    border-radius: 0.5rem;
    padding: 0.5rem 0.875rem;
`;

export const InputField = styled.input<{ ref: any }>`
    width: 100%;
    font-size: 1.0625rem;
    line-height: 1.5rem;
    background: none;
    border: none;
    outline: none;
    letter-spacing: 0.0156rem;

    &::placeholder {
        color: #6e7191;
    }
`;

export const ErrorMessage = styled.div`
    padding: 0.3125rem 0;
    color: #ea2b2b;
    font-size: 0.875rem;
`;
