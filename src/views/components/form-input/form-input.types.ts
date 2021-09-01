import { InputHTMLAttributes, ReactNode, ChangeEventHandler } from 'react';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
}
