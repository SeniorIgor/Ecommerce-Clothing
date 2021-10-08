import { FC } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Home, Auth, Checkout, NotFound, Shop } from './views/pages';
import { User } from './models';

interface Props {
  user: User | null;
}

export const Router: FC<Props> = ({ user }) => {
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
