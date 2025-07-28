import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: auto;
    padding: 16px;
    background-color: #fff;
    color: #000;
    max-width: 760px;
    font-size: 16px;
    line-height: 1.5;
  }
    
  button {
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid black;
    color: #555249;
    width: 100%;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: inherit;
    padding: 8px 16px;
  }

  input, textarea {
    outline: none;
    background-color: white;
    border: 1px solid #D9D9D9;
    color: #555249;
    width: 100%;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    font-weight: inherit;

    &:focus {
      border-color: black;
    }

    &::placeholder {
      font-size: 14px;
    }
  }

  img, label {
    display: block;
  }

  a {
    color: #555249;
    text-underline-offset: 4px;
  }

  * {
    box-sizing: border-box;
  }
`;
