import { AuthField } from '../../models/auth-field';

export const signUpData: AuthField[] = [
  {
    id: '01',
    name: 'displayName',
    type: 'text',
    required: true,
    label: 'Display name',
  },
  {
    id: '02',
    name: 'email',
    type: 'email',
    required: true,
    label: 'Email',
  },
  {
    id: '03',
    name: 'password',
    type: 'password',
    required: true,
    label: 'Password',
  },
  {
    id: '04',
    name: 'confirmPassword',
    type: 'password',
    required: true,
    label: 'Confirm password',
  },
];
