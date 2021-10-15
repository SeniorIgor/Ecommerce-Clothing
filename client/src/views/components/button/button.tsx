import { FC } from 'react';

import { ButtonProps } from './button.types';
import { ButtonContainer } from './button.styles';

export const Button: FC<ButtonProps> = ({
  children,
  theme = '',
  className = '',
  ...otherProps
}) => {
  return (
    <ButtonContainer theme={theme} className={className} {...otherProps}>
      {children}
    </ButtonContainer>
  );
};
