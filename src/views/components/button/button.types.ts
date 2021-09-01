import { ButtonHTMLAttributes } from 'react';

type Theme = 'google' | 'light' | '';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  className?: string;
}
