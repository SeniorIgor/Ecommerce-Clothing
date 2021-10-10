import { FC, memo, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { useActions } from '../../hooks';

import { Collection } from '../collection';

import { Props } from './shop.types';
import { Container } from './shop.styles';

export const Shop: FC<Props> = memo(({ match }) => {
  const { fetchCollectionsRequest } = useActions();

  useEffect(() => {
    console.log('useEffect');

    fetchCollectionsRequest();
  }, [fetchCollectionsRequest]);

  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
