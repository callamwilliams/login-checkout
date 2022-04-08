import React, { InputHTMLAttributes, RefCallback } from 'react';

import { FieldError, Field } from 'react-hook-form';

import { Wrapper, InputField, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    value?: string;
    error?: FieldError;
    register: RefCallback<Field>;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ name, label, value, error, disabled, register, ...props }) => (
    <>
        {label && <label htmlFor={name}>{label}</label>}
        <Wrapper data-testid="Input" error={!!error} disabled={disabled}>
            <InputField ref={register} id={name} name={name} aria-label={label} value={value} {...props} />
        </Wrapper>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
);

export default Input;
