import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle.ts';
import { App } from './App.tsx';
import { Global } from '@emotion/react';
import React from 'react';
import 'leaflet/dist/leaflet.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter basename="/change-cold.netlify.app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
