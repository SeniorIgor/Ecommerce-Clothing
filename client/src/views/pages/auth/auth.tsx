import React from 'react';

import { SignIn } from '../../components/sign-in';
import { SignUp } from '../../components/sign-up';

import { Container } from './auth.styles';

const Auth: React.FC = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default Auth;
