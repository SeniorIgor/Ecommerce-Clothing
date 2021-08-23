import { FC, useState, useRef, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Auth } from './pages/auth';

import { Header } from './layout/header';

import { User } from './models/user';

import firebase, { auth, createUserProfileDocument } from './firebase/firebase';

import './App.scss';

interface UserWithoutId extends Omit<User, 'id'> {}

export const App: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const unsubscribe = useRef<firebase.Unsubscribe | null>(null);

  useEffect(() => {
    unsubscribe.current = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef!.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...(snapShot.data() as UserWithoutId),
          });
        });
      } else {
        setUser(userAuth);
      }
    });

    return () => unsubscribe.current!();
  }, []);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/auth" component={Auth} exact />
      </Switch>
    </>
  );
};
