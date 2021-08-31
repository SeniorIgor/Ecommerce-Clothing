import { AuthField } from '../../../models/auth-field';

export const signInData: AuthField[] = [
  {
    id: '01',
    name: 'email',
    type: 'email',
    required: true,
    label: 'Email',
  },
  {
    id: '02',
    name: 'password',
    type: 'password',
    required: true,
    label: 'Password',
  },
];
