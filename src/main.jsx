import React from 'react';
import ReactDOM from 'react-dom/client';

// Se App.jsx estiver na raiz do projeto (como você mostrou antes):
import App from '/app.jsx';
// Caso mova o App para src depois, troque para:
// import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
