import { Types } from './types';

import { User } from '../../../models/user';
import { FieldsForAuthRequest } from '../../../models/auth';

export interface GoogleSignInRequest {
  type: Types.GOOGLE_SIGN_IN_REQUEST;
}

export interface SignInSuccess {
  type: Types.SIGN_IN_SUCCESS;
  payload: User;
}

export interface SignInFailure {
  type: Types.SIGN_IN_FAILURE;
  payload: string;
}

export interface EmailSignInRequest {
  type: Types.EMAIL_SIGN_IN_REQUEST;
  payload: FieldsForAuthRequest;
}

export interface CheckUserSession {
  type: Types.CHECK_USER_SESSION;
}

export type Actions =
  | GoogleSignInRequest
  | SignInSuccess
  | SignInFailure
  | EmailSignInRequest
  | CheckUserSession;
