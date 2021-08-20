import React from 'react';

import Style from './home.module.scss';

const data = [
  {
    id: '01',
    title: 'Hats',
  },
];

export const Home: React.FC = () => {
  const items = data.map((item) => (
    <div className={Style.item} key={item.id}>
      <div className={Style.content}>
        <h2 className={Style.title}>{item.title}</h2>
        <span className={Style.subtitle}>Shop now</span>
      </div>
    </div>
  ));

  return (
    <div className={Style.container}>
      <div className={Style.list}>{items}</div>
    </div>
  );
};
