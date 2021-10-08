import {
  firebase,
  auth,
  createUserProfileDocument,
} from '../firebase/firebase';

import { SignIn, SignInWithGoogle, Logout, CreateUser } from './types';

export const signInWithEmailAndPassword: SignIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const createUserWithEmailAndPassword: CreateUser = async (
  email,
  password,
  displayName
) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  return createUserProfileDocument(user!, { displayName });
};

export const signInWithGoogle: SignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  return auth.signInWithPopup(provider);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const logout: Logout = () => auth.signOut();
