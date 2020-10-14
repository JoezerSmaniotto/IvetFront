import React from 'react';

import { AuthProvider } from './auth';
// import { ListPetsProvider } from './listPetUser';
// import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <AuthProvider>
    {/* <ListPetsProvider> */}
      {children}
    {/* </ListPetsProvider> */}
  </AuthProvider>
);

export default AppProvider;
