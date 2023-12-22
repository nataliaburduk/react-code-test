import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from './assets/styles/baseTheme';
import './index.scss';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
