import React, { memo } from 'react';

import { useActions } from '../../hooks/use-actions';

import { ICollectionItem } from '../../../models/collection';
import { Button } from '../button';

import Style from './collection-item.module.scss';

interface CollectionItemProps {
  item: ICollectionItem;
}

export const CollectionItem: React.FC<CollectionItemProps> = memo(
  ({ item }) => {
    const { addItem } = useActions();
    const { name, price, imageUrl } = item;

    const backgroundImage = `url(${imageUrl})`;

    return (
      <div className={Style.container}>
        <div className={Style.image} style={{ backgroundImage }} />
        <div className={Style.footer}>
          <span className={Style.name}>{name}</span>
          <span className={Style.price}>{price}</span>
        </div>
        <Button
          className={Style.button}
          theme="light"
          onClick={() => addItem(item)}
        >
          Add to cart
        </Button>
      </div>
    );
  }
);
