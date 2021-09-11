import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/home';
import { Shop } from '../pages/shop';
import { Auth } from '../pages/auth';
import { Checkout } from '../pages/checkout';

import { Header } from '../components/header';
import { NotFound } from '../pages/not-found';

import { useTypedSelector } from '../hooks';
import { selectors } from '../../store';

import Style from './app.module.sass';

const { selectUser } = selectors.user;

export const App: FC = () => {
  const user = useTypedSelector(selectUser);

  return (
    <div className={Style.container}>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/auth" component={Auth}>
          {user ? <Redirect to="/" /> : <Auth />}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
