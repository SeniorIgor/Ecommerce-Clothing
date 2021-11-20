import { ReactNode } from 'react';

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ImageContainerProps {
  imageUrl: string;
}
