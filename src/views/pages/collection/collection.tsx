import { FC, memo } from 'react';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { NotFound } from '../not-found';

import { CollectionProps } from './collection.types';

import {
  Container,
  Title,
  ItemsContainer,
  CollectionItem,
} from './collection.styles';

const { selectCollection } = selectors.shop;

export const Collection: FC<CollectionProps> = memo(({ match }) => {
  const { collectionId } = match.params;
  const collection = useTypedSelector(selectCollection(collectionId));

  if (!collection) {
    return <NotFound />;
  }

  const { title, items } = collection;

  const itemsView = items.map((item) => (
    <CollectionItem item={item} key={item.id} />
  ));

  return (
    <Container>
      <Title>{title}</Title>
      <ItemsContainer>{itemsView}</ItemsContainer>
    </Container>
  );
});
