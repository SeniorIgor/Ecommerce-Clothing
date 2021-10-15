import { User } from '../../../models/user';
import {
  FieldsForSignInRequest,
  SignUpCredentials,
} from '../../../models/auth';

import { Types, SignUpSuccessPayload } from './types';

import * as Actions from './actions';

/** ===================== SIGN IN ===================== */
export const googleSignInRequest = (): Actions.GoogleSignInRequest => {
  return {
    type: Types.GOOGLE_SIGN_IN_REQUEST,
  };
};

export const emailSignInRequest = (
  signInData: FieldsForSignInRequest
): Actions.EmailSignInRequest => {
  return {
    type: Types.EMAIL_SIGN_IN_REQUEST,
    payload: signInData,
  };
};

export const signInSuccess = (user: User): Actions.SignInSuccess => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (message: string): Actions.SignInFailure => {
  return {
    type: Types.SIGN_IN_FAILURE,
    payload: message,
  };
};

/** ================= CHECK USER AUTH ================== */
export const checkUserSession = (): Actions.CheckUserSession => {
  return {
    type: Types.CHECK_USER_SESSION,
  };
};

/** ===================== SIGN OUT ===================== */
export const signOutRequest = (): Actions.SignOutRequest => {
  return {
    type: Types.SIGN_OUT_REQUEST,
  };
};

export const signOutSuccess = (): Actions.SignOutSuccess => {
  return {
    type: Types.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (message: string): Actions.SignOutFailure => {
  return {
    type: Types.SIGN_OUT_FAILURE,
    payload: message,
  };
};

/** ===================== SIGN UP ===================== */
export const signUpRequest = (
  fields: SignUpCredentials
): Actions.SignUpRequest => {
  return {
    type: Types.SIGN_UP_REQUEST,
    payload: fields,
  };
};

export const signUpSuccess = (
  payload: SignUpSuccessPayload
): Actions.SignUpSuccess => {
  return {
    type: Types.SIGN_UP_SUCCESS,
    payload,
  };
};

export const signUpFailure = (message: string): Actions.SignUpFailure => {
  return {
    type: Types.SIGN_UP_FAILURE,
    payload: message,
  };
};
