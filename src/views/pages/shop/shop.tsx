import { FC, memo, useEffect } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { firestore } from '../../../services/firebase';
import { convertCollectionsToMap } from '../../../services/shop';
import { useActions } from '../../hooks';

import { Collection } from '../collection';

import { Props } from './shop.types';
import { Container } from './shop.styles';

export const Shop: FC<Props> = memo(({ match }) => {
  const { updateCollections } = useActions();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsToMap(snapshot);

      updateCollections(collections);
    });

    return () => unsubscribe();
  }, [updateCollections]);

  return (
    <Container>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
});
