import {
  useState,
  FC,
  Fragment,
  ChangeEventHandler,
  FormEventHandler,
} from 'react';

import { Button } from '../button';
import { FormInput } from '../form-input';

import { auth, createUserProfileDocument } from '../../firebase';

import { signUpData } from '../../data/auth/sign-up';

import Style from './sign-up.module.scss';

type HandleChange = ChangeEventHandler<HTMLInputElement>;
type HandleSubmit = FormEventHandler<HTMLFormElement>;
interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [fieldProp: string]: string;
}

const initialState = signUpData.reduce(
  (res, { name }) => ({ ...res, [name]: '' }),
  {} as SignUpState
);

export const SignUp: FC = () => {
  const [state, setState] = useState(initialState);

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
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user!, { displayName });

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
    <div className={Style.container}>
      <h2 className={Style.title}>I&nbsp;do not have a&nbsp;account</h2>
      <span>Sign up&nbsp;with your email and password</span>

      <form onSubmit={handleSubmit}>
        {fieldsView}

        <div className={Style.buttons}>
          <Button type="submit">Sign up</Button>
        </div>
      </form>
    </div>
  );
};
