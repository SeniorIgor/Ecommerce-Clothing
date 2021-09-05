import React from 'react';

import { CollectionPreview } from '../../components/collection-preview';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import Style from './shop.module.scss';

const { selectShopCollections } = selectors.shop;

export const Shop: React.FC = () => {
  const collections = useTypedSelector(selectShopCollections);

  return (
    <div className={Style.container}>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview {...otherProps} key={id} />
      ))}
    </div>
  );
};
