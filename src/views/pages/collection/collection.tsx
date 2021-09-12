import { FC, memo } from 'react';

import { Spinner } from '../../components/spinner';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { CollectionProps } from './collection.types';

import {
  Container,
  Title,
  ItemsContainer,
  CollectionItem,
} from './collection.styles';

const { selectCollection } = selectors.shop;

export const Collection: FC<CollectionProps> = memo(({ match }) => {
  console.log(match);

  // const { collectionId } = match.params;
  // const collection = useTypedSelector(selectCollection(collectionId));

  // const { title, items } = collection;

  // const itemsView = items.map((item) => (
  //   <CollectionItem item={item} key={item.id} />
  // ));

  return (
    <Container>
      {/* <Title>{title}</Title>
      <ItemsContainer>{itemsView}</ItemsContainer> */}
    </Container>
  );
});
