import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Auth } from './pages/auth';

import { Header } from './layout/header';

import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth} exact />
      </Switch>
    </>
  );
};
