import styled, { css } from 'styled-components';

export const ButtonTheme = styled.button`
    font-family: 'Inter';

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    padding: 0px 20px;
    gap: 10px;
    height: 40px;
    width: 107px;

    background-color: #27ae60;

    border: 2px solid #27ae60;
    border-radius: 8px;

    color: var(--color-background);

    :hover {
        opacity: 0.5;
        transition: 0.3s;
    }
    @media (min-width: 395px) {
        padding: 0px;
    }
`;
