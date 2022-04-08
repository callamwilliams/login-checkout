import React, { useEffect } from 'react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import Input from '../components/Input';
import Video from '../components/Video';
import { PinkButton } from '../styles/global';
import { Wrapper, Authenticating, Header, LoginButton, LoginForm, FormItem, ErrorMessage } from '../styles/pages';

const HomePage: React.FC = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, isSubmitSuccessful, isValid, isDirty, errors },
    } = useForm({ mode: 'all' });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data) => {
        await signIn('credentials', {
            ...data,
            callbackUrl: `http://localhost:3000/categories`,
        });
    };

    useEffect(() => {
        if (router.query.error) {
            const error = router.query.error;
            toast(error);
        }
    }, [router]);

    const { ref: usernameRef, ...usernameProps } = register('username', {
        required: 'Please enter a valid username',
    });

    const { ref: passwordRef, ...passwordProps } = register('password', {
        required: 'Please fill in this field',
    });

    return (
        <Wrapper data-testid="login-page">
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <h1>Login</h1>
                    <ErrorMessage>{router.query.error && router.query.error}</ErrorMessage>
                </Header>
                <>
                    <FormItem>
                        <Input
                            register={usernameRef}
                            name="username"
                            type="text"
                            placeholder="username"
                            label={'Username'}
                            error={errors.username}
                            {...usernameProps}
                        />
                    </FormItem>
                    <FormItem>
                        <Input
                            register={passwordRef}
                            name="password"
                            type="password"
                            placeholder="password"
                            label={'Password'}
                            error={errors.password}
                            {...passwordProps}
                        />
                    </FormItem>
                </>

                <LoginButton>
                    {isSubmitting && !isSubmitSuccessful ? (
                        <PinkButton>
                            <Authenticating>
                                Authenticating
                                {'.....'.split('').map((letter) => (
                                    <span key={`ellipsis-${Math.random()}`}>{letter}</span>
                                ))}
                            </Authenticating>
                        </PinkButton>
                    ) : (
                        <PinkButton type="submit" disabled={!isValid || !isDirty}>
                            Submit
                        </PinkButton>
                    )}
                </LoginButton>
            </LoginForm>
            <Video />
            <ToastContainer />
        </Wrapper>
    );
};

export default HomePage;
