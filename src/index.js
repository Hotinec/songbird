import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './scss/index.scss';
import { AppState } from './context/AppState';

ReactDOM.render(
  <AppState>
    <App />
  </AppState>,
  document.getElementById('root')
);
