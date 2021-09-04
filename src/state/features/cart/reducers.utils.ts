import { CollectionItem, CartItem } from '../../../models';

type ChangeCartItem = (
  items: CartItem[],
  newItem: CollectionItem | CartItem,
  count?: number
) => CartItem[];

export const changeCartItem: ChangeCartItem = (items, newItem, count = 1) => {
  const cartItem = items.find(({ id }) => id === newItem.id);

  if (cartItem) {
    return items
      .map((item) =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + count }
          : item
      )
      .filter((item) => item.quantity > 0);
  }

  return [...items, { ...newItem, quantity: 1 }];
};
