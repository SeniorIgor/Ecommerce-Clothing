import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

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

const Collection: FC = memo(() => {
  const { collectionId } = useParams<{ collectionId: string }>();
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

export default Collection;
