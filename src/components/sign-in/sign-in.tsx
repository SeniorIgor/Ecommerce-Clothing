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

import { auth, signInWithGoogle } from '../../firebase';

import { signInData } from '../../data/auth/sign-in';

import Style from './sign-in.module.scss';

type HandleChange = ChangeEventHandler<HTMLInputElement>;
type HandleSubmit = FormEventHandler<HTMLFormElement>;
interface SignInState {
  email: string;
  password: string;
  [fieldProp: string]: string;
}

const initialState = signInData.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignInState
);

const SignIn: FC = memo(() => {
  const [state, setState] = useState(initialState);

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
      <h2 className={Style.title}>I&nbsp;already have account</h2>
      <span>Sign in&nbsp;with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <div className={Style.buttons}>
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
});

export { SignIn };
