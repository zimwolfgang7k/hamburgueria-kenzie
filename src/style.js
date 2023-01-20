import styled from "styled-components";

export const Main = styled.main`
    display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  margin-bottom: 20px;
  padding: 0 0 1rem 0px;

  @media (min-width: 1024px){
    flex-direction: row;
    overflow: hidden;
  }
`