import { useEffect, useContext, createContext, FC } from 'react';

import { firebase, auth, createUserProfileDocument } from '../../firebase';

import { useActions } from './use-actions';

import { User } from '../../models/user';

type CreateUser = (
  email: string,
  password: string,
  displayName: string
) => Promise<
  | firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
  | undefined
>;
type SignIn = (
  email: string,
  password: string
) => Promise<firebase.auth.UserCredential>;
type SignInWithGoogle = () => Promise<firebase.auth.UserCredential>;
type Logout = () => Promise<void>;

interface IContextProps {
  createUserWithEmailAndPassword: CreateUser;
  signInWithEmailAndPassword: SignIn;
  signInWithGoogle: SignInWithGoogle;
  logout: Logout;
}
interface UserWithoutId extends Omit<User, 'id'> {}

const AuthContext = createContext<IContextProps>({} as IContextProps);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const { setCurrentUser } = useActions();

  const signInWithEmailAndPassword: SignIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPassword: CreateUser = async (
    email,
    password,
    displayName
  ) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    return createUserProfileDocument(user!, { displayName });
  };

  const signInWithGoogle: SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    return auth.signInWithPopup(provider);
  };

  const logout: Logout = () => auth.signOut();

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

  const value = {
    logout,
    signInWithGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
