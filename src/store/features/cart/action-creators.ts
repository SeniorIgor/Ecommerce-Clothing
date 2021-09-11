import { CartItem, CollectionItem } from '../../../models';
import { Types } from './types';

import * as Actions from './actions';

export const toggleCartHidden = (): Actions.ToggleCartHidden => {
  return {
    type: Types.TOGGLE_CART_HIDDEN,
  };
};

export const addCartItem = (
  item: CartItem | CollectionItem
): Actions.AddCartItem => {
  return {
    type: Types.ADD_CART_ITEM,
    payload: item,
  };
};

export const removeCartItem = (item: CartItem): Actions.RemoveCartItem => {
  return {
    type: Types.REMOVE_CART_ITEM,
    payload: item,
  };
};

export const clearCartItem = (item: CartItem): Actions.ClearCartItem => {
  return {
    type: Types.CLEAR_CART_ITEM,
    payload: item,
  };
};
