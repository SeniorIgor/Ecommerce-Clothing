import { firebase } from './firebase';

import { DBCollectionItem, CollectionMap } from '../models';

interface Snapshot
  extends firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> {}

export const convertCollectionsToMap = (
  collections: Snapshot
): CollectionMap => {
  return collections.docs.reduce((result, doc) => {
    const { title, items } = doc.data() as DBCollectionItem;
    const index = title.toLowerCase();

    result[index] = { id: doc.id, title, items, routeName: encodeURI(index) };

    return result;
  }, {} as CollectionMap);
};
