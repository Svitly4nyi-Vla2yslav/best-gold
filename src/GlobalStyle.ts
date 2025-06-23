import { css } from '@emotion/react';
import 'modern-normalize';
import Grotesk from "./assets/fonts/RightGrotesk-CompactBlack.ttf";
import BiroScript from "./assets/fonts/BiroScriptPlus-Bold.ttf";
import Formular from "./assets/fonts/Formular-Medium.ttf";
import Roboto from "./assets/fonts/Roboto-Regular.ttf";
import Proxima from "./assets/fonts/d9fe41ee-4904-4a11-ba11-b61cd3be767f.woff2";

export const GlobalStyle = css`
  :root {
    --font-family: "Right Grotesk", sans-serif;
    --second-family: "Biro Script Plus", sans-serif;
    --third-family: "Biro Script Plus", sans-serif;
    --font3: "Formular", sans-serif;
    --font4: "Roboto", sans-serif;
    --textColorWhite: #fff;
  }

  @font-face {
    font-family: 'Roboto';
    // src: url(${Roboto}) format('truetype');
  }

  @font-face {
    font-family: 'Proxima';
    // src: url(${Proxima}) format('truetype');
  }

  @font-face {
    font-family: 'Right Grotesk';
    src: url(${Grotesk}) format('truetype');
  }

  @font-face {
    font-family: 'Biro Script Plus';
    src: url(${BiroScript}) format('truetype');
  }

  @font-face {
    font-family: 'Formular';
    src: url(${Formular}) format('truetype');
  }

  /* Оновлені анімації */
  @keyframes moveX {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes moveY {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --v1: calc(max(9vw, 11vh));
    scrollbar-width: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #01283c;
    background-size: auto 100%;
    background-position: center center;
    background-repeat: cover;
    color: #111111;
    width: 100%;
    margin: 0;
    transition-duration: 300ms;
    overflow: hidden;
  }

  button {
    cursor: pointer;
    transition-duration: 300ms;
  }

  button:focus,
  button:hover {
    // background-color: lightgray; 
    // box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.6); 
  }

  a {
    cursor: pointer;
    transition-duration: 300ms;
    text-decoration: none;
    color: #00d1ff;
  }

  img {
    cursor: pointer;
    transition-duration: 300ms;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-family: 'Right Grotesk';
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
`;
