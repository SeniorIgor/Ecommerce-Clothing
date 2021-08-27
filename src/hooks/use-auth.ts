import {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
  FC,
} from 'react';

import { firebase, auth, createUserProfileDocument } from '../firebase';

import { useActions } from './use-actions';

import { RootState } from './../state';

import { User } from '../models';

interface IContextProps {
  signInWithEmailAndPassword: () => {};
  signInWithGoogle: () => {};
  logout: () => {};
}
interface UserWithoutId extends Omit<User, 'id'> {}

const AuthContext = createContext<IContextProps>({} as IContextProps);

export const useAuth = () => useContext(AuthContext);

// ------------------------------------------------------------
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
// -----------------------------------------------------------

export const AuthProvider: FC = ({ children }) => {
  const { setCurrentUser } = useActions();

  const signInWithEmailAndPassword = (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {});
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    createUserProfileDocument(user!, { displayName }).catch((err) =>
      console.error(err)
    );
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    return auth.signInWithPopup(provider).catch((err) => console.error(err));
  };

  const logout = () => {
    auth.signOut().catch((err) => console.error(err));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef!.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...(snapShot.data() as UserWithoutId),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribe();
  }, [setCurrentUser]);

  const values = {
    logout,
    signInWithGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  };

  return (
    <AuthContext.Provider values={values}>{children}</AuthContext.Provider>
  );
};
