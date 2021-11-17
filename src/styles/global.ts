import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #fafafa;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #093256;
    --blue-light: #65a7ce;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape-text: #272723;
    --shape-dark: #242424;
    --shape-light: #6c757d;
    --white: #ffffff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      @media (max-witdh: 1080px) {
        font-size: 93.75%;
      }

      @media (max-witdh: 720px) {
        font-size: 87.5%;
        }
  }

  body {
    background: var(--background);
      -webkit-font-smoothing: antialiased;
  }

  body, input,textarea,button {
    font-family: Roboto, sans-serif;
      font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
