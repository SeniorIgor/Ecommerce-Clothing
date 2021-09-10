import { firebase } from './firebase';

import { DBCollectionItem } from '../models';

interface Snapshot
  extends firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> {}

export const convertCollections = (collections: Snapshot) => {
  return collections.docs
    .map((doc) => {
      const { title, items } = doc.data() as DBCollectionItem;

      return {
        id: doc.id,
        title,
        items,
        routeName: encodeURI(title.toLowerCase()),
      };
    })
    .reduce((res, item) => {
      // res[item.id] === item;

      return res;
    }, {});

  console.log(transformCollections);
};
