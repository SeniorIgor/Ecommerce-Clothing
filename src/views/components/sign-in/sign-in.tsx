import { useState, memo, FC, Fragment } from 'react';

import { FormInput } from '../form-input';
import { Button } from '../button';
import { useActions } from '../../hooks';

import { SignInState, HandleChange, HandleSubmit } from './sign-in.types';
import { data } from './sign-in.data';
import { Container, Title, ButtonsContainer } from './sign-in.styles';

const initialState = data.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignInState
);

const SignIn: FC = memo(() => {
  const [state, setState] = useState<SignInState>(initialState);
  const { googleSignInRequest, emailSignInRequest } = useActions();

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: HandleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;

    emailSignInRequest({ email, password });
  };

  const fieldsView = data.map(({ id, name, ...otherProps }) => (
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
          <Button type="button" onClick={googleSignInRequest} theme="google">
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
});

export { SignIn };
