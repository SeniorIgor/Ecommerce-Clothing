import { ICollectionItem } from '../../../models';

export interface CartItem extends ICollectionItem {
  quantity: number;
}

export interface CartState {
  hidden: boolean;
  items: CartItem[];
}
