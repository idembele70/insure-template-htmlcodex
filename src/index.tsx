import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./components/globalStyle"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/insure-template-htmlcodex'>
    <App />
    <GlobalStyle/>
  </BrowserRouter>
);
