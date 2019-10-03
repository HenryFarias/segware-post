import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  #root, body, html {
    height: 100%;
    font-size: 16px;
  }
  
  body {
    background-color: #f1f1f1;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2 {    
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.00735em;
  }  

  input, textarea, select {
    width: 100%;
    border: 1px solid #cccc;
    padding: 5px;
    border-radius: 5;
    transition: all .2s ease-in-out;

    &:hover {
      border-color: #ddd;
    }

    &:focus {
      border-color: #222;
    }
  }

  label {
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  }

  textarea {
    resize: none;
    height: 150px;
  }
`;
