import { FC, memo, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { useActions } from '../../hooks';

import { Collection } from '../collection';

import { Container } from './shop.styles';

export const Shop: FC = memo(() => {
  const { fetchCollectionsRequest } = useActions();
  const match = useRouteMatch();

  useEffect(() => {
    fetchCollectionsRequest();
  }, [fetchCollectionsRequest]);

  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
