import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';

import App from './App';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto; 
  font-size: 18px;
  color: #000;
  font-family: 'Roboto';
  font-weight: 400;
  @media (max-width: 1480px) {
    font-size: 16px;
  }
  @media (max-width: 1160px) {
    font-size: 14px;
  }
  @media (max-width: 740px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Global/>
    <App/>
  </>
);

