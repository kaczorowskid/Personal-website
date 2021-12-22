import React from 'react';
import GlobalStyle from './GlobalStyle';
import AppRouting from './routes/AppRouting';
import { routesMap } from './routes/routesMap';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <AppRouting routes={routesMap} />
    </>
  );
}

export default App;
