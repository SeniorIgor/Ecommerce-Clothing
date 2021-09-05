import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/home';
import { Shop } from '../pages/shop';
import { Auth } from '../pages/auth';
import { Checkout } from '../pages/checkout';

import { Header } from '../components/header';

import { useTypedSelector } from '../hooks/use-typed-selector';

import { selectUser } from '../../state/features/user/selectors';

import Style from './app.module.scss';

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
      </Switch>
    </div>
  );
};
