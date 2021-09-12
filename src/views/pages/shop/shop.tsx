import { FC, memo } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../collections-overview';
import { Spinner } from '../../components/spinner';

import { useCollections } from '../../hooks';

import { Collection } from '../collection';

import { Props } from './shop.types';
import { Container } from './shop.styles';

export const Shop: FC<Props> = memo(({ match }) => {
  const isLoading = useCollections();

  return (
    <Container>
      <Route path={`${match.path}`} exact>
        <Spinner isLoading={isLoading}>
          <CollectionsOverview />
        </Spinner>
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <Spinner isLoading={isLoading}>
          <Collection />
        </Spinner>
      </Route>
    </Container>
  );
});
