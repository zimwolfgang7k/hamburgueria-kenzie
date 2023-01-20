import styled from 'styled-components';

export const InputSearch = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 382px;
    height: 60px;
    padding: 0px 10px 0px 15px;
    gap: 115px;
    background-color: var(--color-background);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    position: relative;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    ::placeholder {
        color: var(--grey-20);
    }

    :focus,
    :active {
        border: 2px solid #333333;
        ::placeholder {
            color: var(--grey-300);
        }
    }
`;
