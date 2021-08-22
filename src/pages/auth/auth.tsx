import React from 'react';

import { SignIn } from '../../components/sign-in';

import Style from './auth.module.scss';

export const Auth: React.FC = () => {
  return (
    <div className={Style.container}>
      <SignIn />
    </div>
  );
};
