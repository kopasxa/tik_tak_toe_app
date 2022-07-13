import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Header/>
    <App />
  </StrictMode>
);