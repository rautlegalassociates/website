import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { store } from './app/store';
import { ToastProvider } from './components/ui/Toast';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <ToastProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ToastProvider>
      </Provider>
    </HelmetProvider>
  );
}
