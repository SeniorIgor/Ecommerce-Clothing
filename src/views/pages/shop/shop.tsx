import { FC, memo } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { Collection } from '../collection';

import { Container } from './shop.styles';

interface ShopProps extends RouteComponentProps {}

export const Shop: FC<ShopProps> = memo(({ match }) => {
  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
