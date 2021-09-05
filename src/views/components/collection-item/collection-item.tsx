import { FC, memo } from 'react';
import classNames from 'classnames';

import { useActions } from '../../hooks';

import { Button } from '../button';

import { CollectionItemProps } from './collection-item.types';

import Style from './collection-item.module.scss';

export const CollectionItem: FC<CollectionItemProps> = memo(
  ({ item, className }) => {
    const { addCartItem } = useActions();
    const { name, price, imageUrl } = item;

    const backgroundImage = `url(${imageUrl})`;

    return (
      <div className={classNames(Style.container, className)}>
        <div className={Style.image} style={{ backgroundImage }} />
        <div className={Style.footer}>
          <span className={Style.name}>{name}</span>
          <span className={Style.price}>{price}</span>
        </div>
        <Button
          className={Style.button}
          theme="light"
          onClick={() => addCartItem(item)}
        >
          Add to cart
        </Button>
      </div>
    );
  }
);
