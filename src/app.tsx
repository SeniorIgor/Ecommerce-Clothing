import { FC, useEffect } from 'react';

import { Header } from './views/components/header';
import { useActions } from './views/hooks';
import { Router } from './router';

export const App: FC = () => {
  const { checkUserSession } = useActions();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="wrapper">
      <Header />
      <Router />
    </div>
  );
};
