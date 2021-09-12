import { FC } from 'react';

import { Header } from './views/components/header';
import { useTypedSelector } from './views/hooks';
import { selectors } from './store';
import { Router } from './router';

const { selectUser } = selectors.user;

export const App: FC = () => {
  const user = useTypedSelector(selectUser);

  return (
    <div className="wrapper">
      <Header />
      <Router user={user} />
    </div>
  );
};
