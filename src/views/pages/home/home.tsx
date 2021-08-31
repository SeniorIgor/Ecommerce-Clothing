import React from 'react';

import { Directory } from '../../components/directory';

import Style from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={Style.container}>
      <Directory />
    </div>
  );
};
