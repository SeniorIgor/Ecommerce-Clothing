import { firebase } from '../firebase/firebase';

export type CreateUser = (
  email: string,
  password: string
) => Promise<firebase.auth.UserCredential>;

export type SignIn = (
  email: string,
  password: string
) => Promise<firebase.auth.UserCredential>;

export type SignInWithGoogle = () => Promise<firebase.auth.UserCredential>;

export type Logout = () => Promise<void>;
