import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Shop } from './pages/shop';

import './App.scss';

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} exact />
    </Switch>
  );
};
