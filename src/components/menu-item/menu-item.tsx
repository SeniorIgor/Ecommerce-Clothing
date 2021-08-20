import React, { ReactNode } from 'react';

import Style from './menu-item.module.scss';

interface MenuItemProps {
  title: ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <h2 className={Style.title}>{title}</h2>
        <span className={Style.subtitle}>Shop now</span>
      </div>
    </div>
  );
};
