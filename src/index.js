import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/calculator';
import Quote from './components/quote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <Quote />
  </React.StrictMode>,
);
