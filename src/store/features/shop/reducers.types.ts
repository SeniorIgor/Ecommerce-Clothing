import { firebase } from '../../../services/firebase';

import { CollectionMap, Collection } from '../../../models';
export interface ShopState {
  collections: CollectionMap | null;
  isLoading: boolean;
  error: string | null;
}

export interface CollectionSnapshot
  extends firebase.firestore.QuerySnapshot<Collection[]> {}
