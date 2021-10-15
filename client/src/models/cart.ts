import { CollectionItem } from './collection';

export interface CartItem extends CollectionItem {
  quantity: number;
}
