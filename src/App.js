import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/index';
import GlobalStyle from './styles/global';

import AppProvider from './context/index';


function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </AppProvider>

      <GlobalStyle/>
    </>

  );
}

export default App;
