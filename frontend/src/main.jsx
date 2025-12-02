import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '././styles/base/reset.css';
import '././styles/styles.css';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
    <App />
    </SnackbarProvider>
  </React.StrictMode>
);