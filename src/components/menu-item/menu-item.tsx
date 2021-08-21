import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';

import Style from './menu-item.module.scss';

interface MenuItemProps {
  title: ReactNode;
  imageUrl: string;
  size?: 'large';
}

const defaultProps = {
  size: undefined,
};

const MenuItem: React.FC<MenuItemProps> = memo(({ title, imageUrl, size }) => {
  const backgroundImage = `url(${imageUrl})`;

  return (
    <div className={classNames(Style.container, size && Style[size])}>
      <div className={Style.background} style={{ backgroundImage }} />
      <div className={Style.content}>
        <h2 className={Style.title}>{title}</h2>
        <span className={Style.subtitle}>Shop now</span>
      </div>
    </div>
  );
});

MenuItem.defaultProps = defaultProps;

export { MenuItem };
