import styled from 'styled-components';

export const ProductsLista = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: auto;
    margin-bottom: 20px;
    padding: 0 0 1rem 0px;

    @media (min-width: 1024px) {
        flex-wrap: wrap;
        max-width: 900px;
        overflow: hidden;
    }
`;
