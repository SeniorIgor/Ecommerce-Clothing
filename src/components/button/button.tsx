import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from 'react';

import Style from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <button className={Style.button} {...otherProps}>
      {children}
    </button>
  );
};
