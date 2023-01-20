import styled from 'styled-components';

export const DivPrice = styled.div`
    display: flex;
    width: 363px;
    height: 140px;
    border-top: 2px solid var(--grey-20);
    margin-top: 20px;

    justify-content: space-around;
    align-items: flex-end;

    div {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        width: 100%;
    }
    p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey-100);
    }
    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey-50);
    }
    button {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey-50);
        background-color: var(--grey-20);
        width: 343px;
        height: 60px;
        margin: 20px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
`;
