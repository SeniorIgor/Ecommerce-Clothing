import { FC } from 'react';
import classNames from 'classnames';

import { ButtonProps } from './button.types';

import Style from './button.module.scss';

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
