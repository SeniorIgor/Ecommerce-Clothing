import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/home';
import { Shop } from '../pages/shop';
import { Auth } from '../pages/auth';

import { Header } from '../components/header';

import { useTypedSelector } from '../hooks/use-typed-selector';

import { selectUser } from '../../state/features/user/selectors';

import './app.scss';

export const App: FC = () => {
  const user = useTypedSelector(selectUser);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth}>
          {user ? <Redirect to="/" /> : <Auth />}
        </Route>
      </Switch>
    </>
  );
};
