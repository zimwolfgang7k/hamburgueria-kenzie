import styled from 'styled-components';

export const Product = styled.li`
    width: 21.8rem;
    height: 5rem;
    display: flex;

    border-radius: 5px;

    .div-img {
        width: 80px;
        height: 70px;
        background-color: var(--grey-20);
        border-radius: 5px;
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .div-img img {
        width: 70px;
        height: 70px;
        padding: 5px;
    }
    .titulo {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        display: flex;
    }
    .titulo-category {
        display: flex;
        padding: 10px;
        gap: 5px;
    }
    &:first-child {
        margin-top: 20px;
    }

    .delete-div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
`;
