import { useEffect } from 'react';

import { firestore } from '../../services/firebase';
import { convertCollectionsToMap } from '../../services/shop';
import { selectors } from '../../store';

import { useTypedSelector } from './use-typed-selector';
import { useActions } from './use-actions';

const { selectLoading } = selectors.shop;

export const useCollections = () => {
  const { updateCollections } = useActions();
  const isLoading = useTypedSelector(selectLoading);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionsToMap(snapshot);

      updateCollections(collections);
    });

    return () => unsubscribe();
  }, [updateCollections]);

  return isLoading;
};
