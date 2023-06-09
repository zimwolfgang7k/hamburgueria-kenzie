import styled from 'styled-components';

export const StyledSection = styled.header`
    background: var(--grey-0);
    width: 100%;
    height: 8.688rem;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    align-items: center;

    .input-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    .input {
        position: relative;
        width: 24rem;
    }
    button {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    @media (min-width: 560px) {
        .input-button {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    @media (min-width: 1024px) {
        height: 5rem;
    }
`;
