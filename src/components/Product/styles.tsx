import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #d9dbe9;

    @media (min-width: 50.0625rem) {
        flex-direction: row;
    }

    &:last-child {
        border: none;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 15.625rem;
    border-radius: 1.25rem;
    overflow: hidden;
    margin-right: 1rem;

    @media (min-width: 50.0625rem) {
        max-width: 30%;
    }
`;

export const Detail = styled.div`
    font-size: 1rem;

    @media (min-width: 50.0625rem) {
        width: 70%;
    }

    h3 {
        font-size: 1.25rem;
    }

    span {
        display: block;
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    button {
        margin-right: 0.625rem;
    }
`;

export const Rating = styled.div`
    display: flex;
    color: #333;
    margin-bottom: 0.625rem;
`;
