import { ChangeEventHandler, FormEventHandler } from 'react';

export type HandleChange = ChangeEventHandler<HTMLInputElement>;
export type HandleSubmit = FormEventHandler<HTMLFormElement>;

export interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [fieldProp: string]: string;
}
