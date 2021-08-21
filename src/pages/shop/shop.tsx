import React, { useState } from 'react';

import { CollectionPreview } from '../../components/collection-preview';

import { collections as collectionsData } from '../../data/shop/collections';

import Style from './shop.module.scss';

export const Shop: React.FC = () => {
  const [collections] = useState(collectionsData);

  return (
    <div className={Style.container}>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview {...otherProps} key={id} />
      ))}
    </div>
  );
};
