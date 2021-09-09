import { useState, FC, Fragment } from 'react';

import { Button } from '../button';
import { FormInput } from '../form-input';

import { useAuth } from '../../hooks/use-auth';

import { signUpData } from '../../../assets/data/auth/sign-up';

import { SignUpState, HandleChange, HandleSubmit } from './sign-up.types';
import { Container, Title } from './sign-up.styles';

const initialState = signUpData.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignUpState
);

export const SignUp: FC = () => {
  const [state, setState] = useState<SignUpState>(initialState);

  const auth = useAuth();

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: HandleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      console.log("passwords don't match");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password, displayName);

      setState(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  const fieldsView = signUpData.map(({ id, name, ...otherProps }) => (
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
      <Title>I&nbsp;do not have a&nbsp;account</Title>
      <span>Sign up&nbsp;with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <Button type="submit">Sign up</Button>
      </form>
    </Container>
  );
};
