import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { CatalogProvider } from './context';
import './styles/index.scss';

ReactDOM.render(
  <HashRouter>
    <CatalogProvider>
      <App />
    </CatalogProvider>
  </HashRouter>,
  document.getElementById('root'),
);
