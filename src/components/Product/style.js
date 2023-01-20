import styled from 'styled-components';

export const ContainerCard = styled.li`
    width: 16.75rem;
    height: 24.625rem;
    border: 2px solid var(--grey-0);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 1rem 1rem 0px 0.5rem;

    .text {
        padding-left: 20px;
        gap: 14px;
    }

    .img-div {
        width: 16.5rem;
        height: 9.375rem;
        background-color: var(--grey-0);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 177px;
        height: 177px;
    }

    :hover {
        border: 2px solid var(--grey-100);
        transform: scale(1.05);
        transition: 0.3s;
    }

    @media (max-width: 1290px) {
        width: 14.75rem;
        height: 20.625rem;

        .img-div {
            width: 14.5rem;
            height: 9.375rem;
        }
    }
    @media (max-width: 1024px) {
        width: 12.75rem;
        height: 20.625rem;

        .img-div {
            width: 12.5rem;
            height: 9.375rem;
        }
    }


`;
