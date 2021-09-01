import { ICollectionItem } from '../../../models';

import { CartItem } from './reducers.types';

type AddItemToCart = (
  items: CartItem[],
  newItem: ICollectionItem
) => CartItem[];

export const addItemToCart: AddItemToCart = (items, newItem) => {
  const cartItem = items.find(({ id }) => id === newItem.id);

  if (cartItem) {
    return items.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...newItem, quantity: 1 }];
};
