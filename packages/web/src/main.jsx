import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { TeamProvider } from './context/TeamContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TeamProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </TeamProvider>
    </BrowserRouter>
  </StrictMode>
);
