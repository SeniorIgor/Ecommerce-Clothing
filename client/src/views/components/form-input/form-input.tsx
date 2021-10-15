import { FC, memo } from 'react';

import { FormInputProps } from './form-input.types';

import { Container, Input, Label } from './form-input.styles';

export const FormInput: FC<FormInputProps> = memo(
  ({ handleChange, label, ...otherProps }) => {
    return (
      <Container>
        <Input onChange={handleChange} {...otherProps} />
        {label && (
          <Label
            className={otherProps.value?.toString().length ? 'shrink' : ''}
          >
            {label}
          </Label>
        )}
      </Container>
    );
  }
);
