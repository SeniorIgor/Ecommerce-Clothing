import { FC, memo } from 'react';
import classNames from 'classnames';

import { FormInputProps } from './form-input.types';

import Style from './form-input.module.scss';

export const FormInput: FC<FormInputProps> = memo(
  ({ handleChange, label, ...otherProps }) => {
    return (
      <div className={Style.container}>
        <input
          onChange={handleChange}
          className={Style.input}
          {...otherProps}
        />
        {label && (
          <label
            className={classNames(
              otherProps.value?.toString().length && Style.shrink,
              Style.label
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
