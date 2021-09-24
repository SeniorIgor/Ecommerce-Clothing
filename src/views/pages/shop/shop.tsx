import { FC, memo } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { useCollections } from '../../hooks';

import { Collection } from '../collection';

import { Props } from './shop.types';
import { Container } from './shop.styles';

export const Shop: FC<Props> = memo(({ match }) => {
  useCollections();

  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
