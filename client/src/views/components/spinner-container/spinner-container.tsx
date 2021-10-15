import { FC, Children, isValidElement, cloneElement } from 'react';

import { Spinner } from '../spinner';

interface Props {
  isLoading: boolean;
}

export const SpinnerContainer: FC<Props> = ({
  isLoading,
  children,
  ...otherProps
}) => {
  if (!isLoading) {
    const childrenWithProps = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, { ...otherProps });
      }
    });

    return <>{childrenWithProps}</>;
  }

  return <Spinner />;
};
