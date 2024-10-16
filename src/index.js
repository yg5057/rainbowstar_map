import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  /* common */
  html { font-size: var(--font-size-base); }
  body { margin: 0 auto; padding: 0; font-size: 1.6rem; font-family: var(--font-primary); background-color: var(--White); -ms-overflow-style: scroll; }
  ::-webkit-scrollbar { display: none; } 
  
  * {  margin: 0; padding: 0; outline: none; border: none; text-decoration: none; box-sizing: border-box;  }
  ul { list-style: none; }
  img { max-width: 100%; height: auto; }
  a { text-decoration: none; color: inherit; }
  button { background: none; border: none; cursor: pointer; }
  input {  outline: none !important; border: none !important; background: none !important; }
  input::placeholder { color: inherit;  opacity: 0.7;  font-size: 11px; }
  h1, h2, h3, h4, h5, h6 { margin: 0; }
  

  /* font */
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");

:root {
  /* font */
  --font-size-base: 62.5%; 
  --font-family-primary: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  /* color */
  --White: #FFFF;
  --Black: #1b1b1b;
  --Default-Blue: #248CFA;
  --Grey: #1B1B1B66;
  --Input-bg: #F4F8FF;
  --Input-border: #0472F5;
  --Input-label: #476490;
  --InfoWindow-title-bg: #509DEF;
  --InfoWindow-conts-title: #375E99;
  /* DropShadow */
  --DropShadow-Bottom-XS: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  --DropShadow-Bottom-S: 4px 4px 3px 0px rgba(0, 0, 0, 0.20);
  --DropShadow-Bottom-M: 0px 4px 4px 0px rgba(0, 0, 0, 0.20);
  --DropShadow-Right-L:  4px 4px 3px 0px rgba(0, 0, 0, 0.20);
}

`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
        <App />
  </React.StrictMode>
);

