import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
