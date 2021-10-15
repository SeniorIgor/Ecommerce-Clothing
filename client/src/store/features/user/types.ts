import { firebase } from '../../../services/firebase';
import { User } from '../../../models';

export enum Types {
  GOOGLE_SIGN_IN_REQUEST = '@user/GOOGLE_SIGN_IN',
  EMAIL_SIGN_IN_REQUEST = '@user/EMAIL_SIGN_IN',

  SIGN_IN_SUCCESS = '@user/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@user/SIGN_IN_FAILURE',

  CHECK_USER_SESSION = '@user/CHECK_USER_SESSION',

  SIGN_OUT_REQUEST = '@user/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS = '@user/SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = '@user/SIGN_OUT_FAILURE',

  SIGN_UP_REQUEST = '@user/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = '@user/SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = '@user/SIGN_UP_FAILURE',
}

export type UserCredential = firebase.auth.UserCredential;

export type UserRef =
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;

export type UserSnapshot =
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;

export type FirebaseUser = firebase.User;

export interface UserWithoutId extends Omit<User, 'id'> {}

export interface AdditionalData {
  [key: string]: any;
}

export interface SignUpSuccessPayload {
  user: FirebaseUser;
  additionalData: AdditionalData;
}
