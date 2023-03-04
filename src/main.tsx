import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --checkbox-color: #ee9ca7;
    --checkbox-shadow: rgba(238, 156, 167, 0.2);
    --add-button: #ee9ca7;
    --add-button-shadow: rgba(238, 156, 167, 0.4);
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 1em;
    overflow: hidden;
    font-family: "DM Sans", sans-serif;
    background-image: linear-gradient(
        62deg,
        rgba(1, 95, 183, 0.9732216701223994) 13%,
        rgba(255, 122, 151, 0.5) 4%
      ),
      linear-gradient(
        44deg,
        rgba(0, 43, 99, 0.07922090238615942) 39%,
        rgba(242, 140, 143, 0.5) 18%
      ),
      linear-gradient(
        118deg,
        rgba(84, 202, 242, 0.03152997265339608) 40%,
        rgba(247, 155, 187, 0.5) 54%
      ),
      linear-gradient(
        58deg,
        rgba(90, 90, 237, 0.16144443572260592) 83%,
        rgba(249, 156, 142, 0.5) 23%
      );
    background-blend-mode: normal, lighten, multiply, hard-light;
  }

  input {
    outline: none;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <App />
    <GlobalStyle />
  </>,
);
