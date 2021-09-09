import { FormEventHandler, ChangeEventHandler, MouseEventHandler } from 'react';

export type HandleChange = ChangeEventHandler<HTMLInputElement>;
export type HandleSubmit = FormEventHandler<HTMLFormElement>;
export type HandleClick = MouseEventHandler<HTMLButtonElement>;

export interface SignInState {
  email: string;
  password: string;
  [fieldProp: string]: string;
}
