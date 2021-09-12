import { FC, Children, isValidElement, cloneElement } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

interface Props {
  isLoading: boolean;
}

export const Spinner: FC<Props> = ({ isLoading, children, ...otherProps }) => {
  if (!isLoading) {
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { ...otherProps });
      }
    });

    return <>{childrenWithProps}</>;
  }

  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};
