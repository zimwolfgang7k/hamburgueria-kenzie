import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ul, ol, li{
    list-style: none;
  }

  section, aside, div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  :root {

    --color-background: #FFFFFF;
    --color-primary: #27ae62;
    --color-primary-50: ##93D7AF; 
    --color-secundary: #EB5757; 

    --grey-300: #828282;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0; 
    --grey-0: #F5F5F5;

    --feedback-negative: #E60000; 
    --feedback-warning: #FFCD07;
    --feedback-success: #168821; 
    --feedback-information:  #155BCB; 
  }
  .Toastify__toast {
        display: flex;
        flex-direction: row;
    }
    .Toastify__toast--rtl {
        display: flex;
        flex-direction: row;
    }
    .Toastify__toast-icon {
        display: flex;
        flex-direction: row;
    }
    .Toastify__toast-body {
        display: flex;
        flex-direction: row;
    }



  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: var(--color-background);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.0rem;
  }
  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }
`;

export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0rem 1rem;
`;
