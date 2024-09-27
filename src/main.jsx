import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext  = {}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
      <Toaster />
    </AuthProvider>
  </StrictMode>
);
