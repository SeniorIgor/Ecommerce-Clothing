import { FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Home, Auth, Checkout, NotFound, Shop } from './views/pages';
import { useTypedSelector } from './views/hooks';
import { selectors } from './store';

const { selectUser } = selectors.user;

export const Router: FC = () => {
  const user = useTypedSelector(selectUser);

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/shop" component={Shop} />
      <Route path="/checkout" component={Checkout} exact />
      <Route path="/auth">{user ? <Redirect to="/" /> : <Auth />}</Route>

      <Route component={NotFound} />
    </Switch>
  );
};
