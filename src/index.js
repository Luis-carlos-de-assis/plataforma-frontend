import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ padding: '50px', textAlign: 'center', fontSize: '24px' }}>
      Olá, Mundo! O React está renderizando.
    </div>
  </React.StrictMode>
);
