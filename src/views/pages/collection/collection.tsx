import { FC, memo } from 'react';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import { NotFound } from '../not-found';

import { CollectionItem } from '../../components/collection-item';

import { CollectionProps } from './collection.types';

import Style from './collection.module.scss';

const { selectCollection } = selectors.shop;

export const Collection: FC<CollectionProps> = memo(({ match }) => {
  const { collectionId } = match.params;
  const collection = useTypedSelector(selectCollection(collectionId));

  if (!collection) {
    return <NotFound />;
  }

  const { title, items } = collection;

  const itemsView = items.map((item) => (
    <CollectionItem
      item={item}
      key={item.id}
      className={Style.collectionItem}
    />
  ));

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>{title}</h1>
      <div className={Style.items}>{itemsView}</div>
    </div>
  );
});
