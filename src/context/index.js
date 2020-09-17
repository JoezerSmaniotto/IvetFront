import React from 'react';

import { AuthProvider } from './auth';
// import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <AuthProvider>
      {children}
  </AuthProvider>
);

export default AppProvider;
