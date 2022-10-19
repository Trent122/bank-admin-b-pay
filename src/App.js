import React from 'react';

import './App.css';
import GlobalStyle from './themes/global-style';

import Routes from './Routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;