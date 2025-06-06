import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/variables.css'; // Import CSS variables
import './styles/global.css';    // Import global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
