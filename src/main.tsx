import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
