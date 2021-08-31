import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import Style from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isGoogleSignIn?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(Style.button, isGoogleSignIn && Style.google)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
