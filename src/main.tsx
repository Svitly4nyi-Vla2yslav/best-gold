import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.ts';
import { App } from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';
import 'leaflet/dist/leaflet.css';


// const theme = {
//   primaryBlack: '#121417',
//   primaryGray: '#8A8A89',
//   primaryYellow: '#f37113',
//   primaryLightYellow: '#FFDC86',
//   lightYellow: '#fc832c',
//   green: '#9FBAAE',
//   lightGreen: '#CBDED3',
//   blue: '#9FB7CE',
//   lightBlue: '#BFD6EA',
//   pink: '#E0A39A',
//   lightPink: '#F2C0BD',
//   orange: '#FBDDC8',
//   lightOrange: 'rgba(252, 131, 44, 0.2)',
// };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
