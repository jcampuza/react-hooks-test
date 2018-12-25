import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body, html {
    font-size: 14px;
    font-family: 'Lato', Helvetica, Arial, sans-serif;
  }

  html {
    background-color: pink;
  }

  body {
    background-color: #efefef;
    min-height: 100vh;
    position: relative;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    background-color: #ffa9b8;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ul {
    margin: 0 0 1rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 1rem;
  }

  button {
    padding: 0 1rem;
    min-width: 60px;
    background-color: #ccc;
    height: 2rem;
    border: none;
    border-radius: 2px;

    &:hover {
      background-color: #bbb;
    }

    + button {
      margin-left: 0.5rem;
    }
  }

  input[type="text"] {
    border: 1px solid #aaa;
    padding: 0.5rem;
    width: 100%;
    border-radius: 2px;
  }

  hr {
    height: 1px;
    background-color: #999;
    width: 100%;
    border: none;
    margin: 1.5rem 0;
  }
`;
