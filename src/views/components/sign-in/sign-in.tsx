import { useState, memo, FC, Fragment } from 'react';

import { FormInput } from '../form-input';
import { Button } from '../button';

import { signInData } from '../../../assets/data/auth/sign-in';

import { useAuth } from '../../hooks/use-auth';

import {
  SignInState,
  HandleChange,
  HandleClick,
  HandleSubmit,
} from './sign-in.types';
import { Container, Title, ButtonsContainer } from './sign-in.styles';

const initialState = signInData.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignInState
);

const SignIn: FC = memo(() => {
  const [state, setState] = useState<SignInState>(initialState);

  const auth = useAuth();

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: HandleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick: HandleClick = async () => {
    try {
      await auth.signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const fieldsView = signInData.map(({ id, name, ...otherProps }) => (
    <Fragment key={id}>
      <FormInput
        name={name}
        {...otherProps}
        value={state[name]}
        handleChange={handleChange}
      />
    </Fragment>
  ));

  return (
    <Container>
      <Title>I&nbsp;already have account</Title>
      <span>Sign in&nbsp;with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={handleClick} theme="google">
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
});

export { SignIn };
