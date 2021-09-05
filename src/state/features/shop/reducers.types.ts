import { Collection } from '../../../models';

export interface CollectionList {
  [key: string]: Collection;
}

export interface ShopState {
  collections: CollectionList;
}
