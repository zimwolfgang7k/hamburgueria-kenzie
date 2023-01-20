import styled from 'styled-components';

export const ContainerCarrinho = styled.section`
    width: 100%;
    background-color: var(--grey-0);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .text {
        margin-top: 20px;
    }

    .green {
        background-color: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
        font-size: 18px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .green > h1 {
        color: var(--color-background);
    }

    .itens {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        gap: 14px;
    }

    .itens-section > span {
        font-size: 14px;
    }
    .div-itens {
        height: 100%;
        width: 100%;
        background-color: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
    }

    @media (min-width: 1024px) {
        width: 24rem;
        height: 100%;
    }
`;
