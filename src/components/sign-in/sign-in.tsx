import {
  useState,
  memo,
  FC,
  FormEventHandler,
  ChangeEventHandler,
  Fragment,
} from 'react';

import { FormInput } from '../form-input';
import { Button } from '../button';

import { signInData } from '../../data/auth/sign-in';

import Style from './sign-in.module.scss';

type HandleChange = ChangeEventHandler<HTMLInputElement>;
type HandleSubmit = FormEventHandler<HTMLFormElement>;
interface SignInState {
  [fieldProp: string]: string;
}

const initialState = signInData.reduce<SignInState>(
  (res, { name }) => ({ ...res, [name]: '' }),
  {}
);

const SignIn: FC = memo(() => {
  const [state, setState] = useState(initialState);

  const handleChange: HandleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: HandleSubmit = (event) => {
    event.preventDefault();

    setState({ email: '', password: '' });
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
    <div className={Style.container}>
      <h2>I already have account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
});

export { SignIn };
