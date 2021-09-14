import { FC, memo } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import {
  Container,
  Title,
  ItemsContainer,
  CollectionItem,
} from './collection.styles';

const { selectCollection } = selectors.shop;

export const Collection: FC = memo(() => {
  const { collectionId } = useRouteMatch<{ collectionId: string }>().params;

  const { title, items } = useTypedSelector(selectCollection(collectionId))!;

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
