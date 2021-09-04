import { CartItem, CollectionItem } from '../../../models';

export interface CartState {
  hidden: boolean;
  items: CartItem[];
}

export type ChangeHandler = (
  state: CartState,
  newItem: CartItem | CollectionItem,
  count?: number
) => CartState;
