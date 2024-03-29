import { CollectionItem, CartItem } from '../../../models';

import { Types } from './types';

export interface ToggleCartHidden {
  type: Types.TOGGLE_CART_HIDDEN;
}

export interface AddCartItem {
  type: Types.ADD_CART_ITEM;
  payload: CollectionItem | CartItem;
}

export interface RemoveCartItem {
  type: Types.REMOVE_CART_ITEM;
  payload: CartItem;
}

export interface ClearCartItem {
  type: Types.CLEAR_CART_ITEM;
  payload: CartItem;
}

export interface SetCartItems {
  type: Types.SET_CART_ITEMS;
  payload: Array<CartItem>;
}

export interface ClearCart {
  type: Types.CLEAR_CART;
}

export type Actions =
  | ToggleCartHidden
  | AddCartItem
  | RemoveCartItem
  | ClearCartItem
  | SetCartItems
  | ClearCart;
