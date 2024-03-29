import { FC, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { useTypedSelector } from './views/hooks';
import { selectors } from './store';
import { Spinner } from './views/components/spinner';
import ErrorBoundary from './views/components/error-boundary';
import NotFoundPage from './views/pages/not-found';

const { selectUser } = selectors.user;

const HomePage = lazy(() => import('./views/pages/home'));
const AuthPage = lazy(() => import('./views/pages/auth'));
const CheckoutPage = lazy(() => import('./views/pages/checkout'));
const ShopPage = lazy(() => import('./views/pages/shop'));

export const Router: FC = () => {
  const user = useTypedSelector(selectUser);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} exact />
          <Route path="/auth">
            {user ? <Redirect to="/" /> : <AuthPage />}
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};
