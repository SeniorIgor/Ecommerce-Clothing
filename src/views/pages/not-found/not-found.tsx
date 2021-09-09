import { FC } from 'react';

import { Container, Title, Text } from './not-found.types';

export const NotFound: FC = ({ children }) => {
  return (
    <Container>
      <Title>404</Title>
      <Text>{children || 'Page not found'}</Text>
    </Container>
  );
};
