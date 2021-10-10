import { useState, FC, Fragment } from 'react';

import { Button } from '../button';
import { FormInput } from '../form-input';
import { useActions } from '../../hooks';

import { data } from './sign-up.data';
import { SignUpState, HandleChange, HandleSubmit } from './sign-up.types';
import { Container, Title } from './sign-up.styles';

const initialState = data.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignUpState
);

export const SignUp: FC = () => {
  const [state, setState] = useState<SignUpState>(initialState);
  const { signUpRequest } = useActions();

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: HandleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpRequest({
      displayName,
      email,
      password,
    });
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
      <Title>I&nbsp;do not have a&nbsp;account</Title>
      <span>Sign up&nbsp;with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <Button type="submit">Sign up</Button>
      </form>
    </Container>
  );
};
