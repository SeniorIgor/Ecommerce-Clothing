import { firebase, auth } from '../firebase/firebase';

import { SignIn, SignInWithGoogle, Logout, CreateUser } from './types';

export const signInWithEmailAndPassword: SignIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const createUserWithEmailAndPassword: CreateUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
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
