import { FC, memo } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Spinner } from '../../components/spinner';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import {
  Container,
  Title,
  ItemsContainer,
  CollectionItem,
} from './collection.styles';

const { selectCollection, selectLoading, selectError } = selectors.shop;

export const Collection: FC = memo(() => {
  const { collectionId } = useRouteMatch<{ collectionId: string }>().params;
  const collection = useTypedSelector(selectCollection(collectionId));
  const isLoading = useTypedSelector(selectLoading);
  const error = useTypedSelector(selectError);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  const { title, items } = collection!;

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
