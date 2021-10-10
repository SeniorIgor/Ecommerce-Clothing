import { Types } from './types';

import { User } from '../../../models/user';
import {
  FieldsForSignInRequest,
  SignUpCredentials,
} from '../../../models/auth';
import { SignUpSuccessPayload } from './types';

/** ==================== SIGN IN ==================== */
export interface GoogleSignInRequest {
  type: Types.GOOGLE_SIGN_IN_REQUEST;
}

export interface EmailSignInRequest {
  type: Types.EMAIL_SIGN_IN_REQUEST;
  payload: FieldsForSignInRequest;
}

export interface SignInSuccess {
  type: Types.SIGN_IN_SUCCESS;
  payload: User;
}

export interface SignInFailure {
  type: Types.SIGN_IN_FAILURE;
  payload: string;
}

/** ================ CHECK USER AUTH ================= */
export interface CheckUserSession {
  type: Types.CHECK_USER_SESSION;
}

/** ==================== SIGN OUT ==================== */
export interface SignOutRequest {
  type: Types.SIGN_OUT_REQUEST;
}

export interface SignOutSuccess {
  type: Types.SIGN_OUT_SUCCESS;
}

export interface SignOutFailure {
  type: Types.SIGN_OUT_FAILURE;
  payload: string;
}

/** ==================== SIGN UP ==================== */
export interface SignUpRequest {
  type: Types.SIGN_UP_REQUEST;
  payload: SignUpCredentials;
}

export interface SignUpSuccess {
  type: Types.SIGN_UP_SUCCESS;
  payload: SignUpSuccessPayload;
}

export interface SignUpFailure {
  type: Types.SIGN_UP_FAILURE;
  payload: string;
}

export type Actions =
  | GoogleSignInRequest
  | SignInSuccess
  | SignInFailure
  | EmailSignInRequest
  | CheckUserSession
  | SignOutRequest
  | SignOutSuccess
  | SignOutFailure
  | SignUpRequest
  | SignUpSuccess
  | SignUpFailure;
