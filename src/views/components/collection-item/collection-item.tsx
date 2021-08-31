import React, { memo } from 'react';

import { ICollectionItem } from '../../../models/collection';

import Style from './collection-item.module.scss';

interface CollectionItemProps extends Omit<ICollectionItem, 'id'> {}

export const CollectionItem: React.FC<CollectionItemProps> = memo(
  ({ name, price, imageUrl }) => {
    const backgroundImage = `url(${imageUrl})`;

    return (
      <div className={Style.container}>
        <div className={Style.image} style={{ backgroundImage }} />
        <div className={Style.footer}>
          <span className={Style.name}>{name}</span>
          <span className={Style.price}>{price}</span>
        </div>
      </div>
    );
  }
);
