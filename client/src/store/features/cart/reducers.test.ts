import { Action } from '../../root-action';
import {
  addCartItem,
  clearCartItem,
  clearCart,
  toggleCartHidden,
  setCartItems,
  removeCartItem,
} from './action-creators';
import { Types } from './types';

import * as reducers from './reducers';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(reducers.reducer(undefined, {} as Action)).toEqual(
      reducers.initialState
    );
  });

  it('should handle ADD_CART_ITEM', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
    };

    expect(reducers.reducer(undefined, addCartItem(item))).toEqual({
      ...reducers.initialState,
      items: [{ ...item, quantity: 1 }],
    });
  });

  it('should handle CLEAR_CART_ITEM', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
      quantity: 7,
    };

    expect(
      reducers.reducer(
        { ...reducers.initialState, items: [item] },
        clearCartItem(item)
      )
    ).toEqual(reducers.initialState);
  });

  it('should handle CLEAR_CART_ITEM in the empty cart', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
      quantity: 7,
    };

    expect(reducers.reducer(undefined, clearCartItem(item))).toEqual(
      reducers.initialState
    );
  });

  it('should handle CLEAR_CART', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
      quantity: 7,
    };

    expect(
      reducers.reducer(
        { ...reducers.initialState, items: [item, item, item], hidden: true },
        clearCart()
      )
    ).toEqual({ ...reducers.initialState, hidden: true });
  });

  it('should handle SET_CART_ITEMS', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
      quantity: 7,
    };

    const items = [item, item, item, item];

    expect(
      reducers.reducer(
        { ...reducers.initialState, hidden: true },
        setCartItems(items)
      )
    ).toEqual({ ...reducers.initialState, items, hidden: true });
  });

  it('should handle REMOVE_CART_ITEM', () => {
    const item = {
      id: 1,
      imageUrl: '',
      name: '',
      price: 2000,
      quantity: 7,
    };

    const items = [item, { ...item, id: 2 }];

    expect(
      reducers.reducer(
        { ...reducers.initialState, items },
        removeCartItem(item)
      )
    ).toEqual({
      ...reducers.initialState,
      items: [
        { ...item, quantity: 6 },
        { ...item, id: 2 },
      ],
    });
  });

  it('should handle TOGGLE_CART_HIDDEN', () => {
    expect(
      reducers.reducer(
        { ...reducers.initialState, hidden: true },
        toggleCartHidden()
      )
    ).toEqual({ ...reducers.initialState, hidden: false });
  });
});
