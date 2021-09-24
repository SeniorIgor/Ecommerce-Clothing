import { useEffect } from 'react';

import { useActions } from './use-actions';

export const useCollections = () => {
  const { fetchCollections } = useActions();

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);
};

// export const useCollections = () => {
//   const { updateCollections } = useActions();
//   const isLoading = useTypedSelector(selectLoading);

//   useEffect(() => {
//     const collectionRef = firestore.collection('collections');

//     const unsubscribe = collectionRef.onSnapshot(async (snapshot) => {
//       const collections = convertCollectionsToMap(snapshot);

//       updateCollections(collections);
//     });

//     return () => unsubscribe();
//   }, [updateCollections]);

//   return isLoading;
// };
