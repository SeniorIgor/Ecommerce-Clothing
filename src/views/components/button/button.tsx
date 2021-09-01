import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import Style from './button.module.scss';

type Theme = 'google' | 'light' | '';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  theme = '',
  className = '',
  ...otherProps
}) => {
  return (
    <button
      className={classNames(Style.button, Style[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
