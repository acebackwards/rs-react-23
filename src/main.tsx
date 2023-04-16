import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/index';
import { Provider } from 'react-redux';
import { setupStore } from './app/store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
