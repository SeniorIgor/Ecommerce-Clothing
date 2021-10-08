import { User } from '../../../models/user';
import { FieldsForAuthRequest } from '../../../models/auth';

import { Types } from './types';

import {
  GoogleSignInRequest,
  SignInSuccess,
  SignInFailure,
  EmailSignInRequest,
} from './actions';

export const googleSignInRequest = (): GoogleSignInRequest => {
  return {
    type: Types.GOOGLE_SIGN_IN_REQUEST,
  };
};

export const signInSuccess = (user: User): SignInSuccess => {
  return {
    type: Types.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (message: string): SignInFailure => {
  return {
    type: Types.SIGN_IN_FAILURE,
    payload: message,
  };
};

export const emailSignInRequest = (
  signInData: FieldsForAuthRequest
): EmailSignInRequest => {
  return {
    type: Types.EMAIL_SIGN_IN_REQUEST,
    payload: signInData,
  };
};
