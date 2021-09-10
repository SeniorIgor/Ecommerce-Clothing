import { FC, memo, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { firestore } from '../../../services/firebase';
import { convertCollections } from '../../../services/shop';

import { Collection } from '../collection';

import { ShopProps } from './shop.types';
import { Container } from './shop.styles';

export const Shop: FC<ShopProps> = memo(({ match }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      convertCollections(snapshot);
    });

    // const unsubscribe = null;

    // return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
