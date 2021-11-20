import React from 'react';

import { Directory } from '../../components/directory';

import { Container } from './home.styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Directory />
    </Container>
  );
};

export default Home;
