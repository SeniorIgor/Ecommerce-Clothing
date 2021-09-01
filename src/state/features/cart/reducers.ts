import { ICollectionItem } from '../../../models';

import { Types } from './types';
import { Action } from '../actions';

import { addItemToCart } from './reducers.utils';
import { CartState } from './reducers.types';

const initialState: CartState = {
  hidden: true,
  items: [],
};

const addItem = (state: CartState, newItem: ICollectionItem) => {
  return {
    ...state,
    items: addItemToCart(state.items, newItem),
  };
};

export const reducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case Types.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case Types.ADD_ITEM:
      return addItem(state, action.payload);

    default:
      return state;
  }
};
