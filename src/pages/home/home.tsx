import React from 'react';

import { MenuItem } from '../../components/menu-item';

import Style from './home.module.scss';

const data = [
  {
    id: '01',
    title: 'Hats',
  },
];

export const Home: React.FC = () => {
  const items = data.map((item) => <MenuItem title={item} />);

  return (
    <div className={Style.container}>
      <div className={Style.list}>{items}</div>
    </div>
  );
};
