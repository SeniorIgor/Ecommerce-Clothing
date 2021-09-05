import { FC, memo } from 'react';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import { CollectionProps } from './collection.types';

import Style from './collection.module.scss';

const { selectCollection } = selectors.shop;

export const Collection: FC<CollectionProps> = memo(({ match }) => {
  const { collectionId } = match.params;
  const collection = useTypedSelector(selectCollection(collectionId));

  return (
    <div className={Style.container}>
      <h1>Collection page</h1>
    </div>
  );
});
