import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    background: transparent;
    font-family: 'Prompt', sans-serif;
  }
  html {
    font-size: 16px;
    @media(max-width: 1200px) {
      font-size: 14px;
    }
    @media(max-width: 560px) {
      font-size: 16px;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  button {
      cursor: pointer;
      background-color: transparent;
  }
  .container {
    flex: 1;
    max-width: 1246px;
    margin: 0 auto;
    padding: 0px 0.9375rem;
    @media(max-width: 1200px) {
      max-width: 100%;
    }
  }
  body {
    background : ${props => props.theme.background};
    overflow-x: hidden;
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #667ACC;
    }
  }

  ul,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
`;
 
export default GlobalStyle;