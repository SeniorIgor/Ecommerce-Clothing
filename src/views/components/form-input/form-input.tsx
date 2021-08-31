import { FC, InputHTMLAttributes, ReactNode, ChangeEventHandler } from 'react';
import classNames from 'classnames';

import Style from './form-input.module.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
}

export const FormInput: FC<FormInputProps> = ({
  handleChange,
  label,
  ...otherProps
}) => {
  return (
    <div className={Style.container}>
      <input onChange={handleChange} className={Style.input} {...otherProps} />
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
};
