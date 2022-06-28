import React from 'react';
import Router from './Routes/router';
import GlobalStyles from './Styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;
