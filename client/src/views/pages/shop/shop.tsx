import { FC, memo, useEffect, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { useActions } from '../../hooks';
import { Container } from './shop.styles';

const CollectionsOverview = lazy(
  () => import('../../components/collections-overview')
);
const Collection = lazy(() => import('../collection'));

const Shop: FC = memo(() => {
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

export default Shop;
