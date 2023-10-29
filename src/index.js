// Utilities
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
// import './index.css';
import './index.sass';

// Components
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
