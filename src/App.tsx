import React from 'react';

import { Home } from './pages/home';

import Style from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={Style.container}>
      <Home />
    </div>
  );
};
