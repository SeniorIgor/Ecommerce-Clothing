import { FC, MouseEventHandler, memo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

import { MenuItemProps } from './menu-item.types';

import Style from './menu-item.module.scss';

const defaultProps = {
  size: undefined,
};

const MenuItem: FC<MenuItemProps> = memo(
  ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();

    const backgroundImage = `url(${imageUrl})`;

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
      const url = `${match.url}${linkUrl}`;

      history.push(url);
    };

    return (
      <div
        className={classNames(Style.container, size && Style[size])}
        onClick={handleClick}
      >
        <div className={Style.background} style={{ backgroundImage }} />
        <div className={Style.content}>
          <h2 className={Style.title}>{title}</h2>
          <span className={Style.subtitle}>Shop now</span>
        </div>
      </div>
    );
  }
);

MenuItem.defaultProps = defaultProps;

export { MenuItem };
