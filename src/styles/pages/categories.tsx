import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    text-align: center;
`;

export const ListItem = styled.li`
    background: #00c3b9;
    margin-bottom: 1.25rem;
    width: 100%;
    border-radius: 3.125rem;
    color: #ffffff;

    @media (min-width: 50.0625rem) {
        max-width: 50%;
    }

    &:nth-child(1) {
        background: #3b6dee;
    }

    &:nth-child(2) {
        background: #d613b6;
    }

    &:nth-child(3) {
        background: #407899;
    }

    a {
        display: block;
        width: 100%;
        border-radius: 3.125rem;
        padding: 1.25rem 0;
    }
`;

export const ProductList = styled.ul`
    list-style: none;
`;
