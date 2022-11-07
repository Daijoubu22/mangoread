import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/_global.scss';
import './scss/_typography.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<App />);
