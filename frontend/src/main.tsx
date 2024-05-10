import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartProvider.tsx';
import { GlobalStyle } from './assets/css/GlobalStyle.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartProvider>,
);
