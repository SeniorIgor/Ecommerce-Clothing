import { Types } from './types';
import { Action } from '../../root-action';

import { changeCartItem } from './reducers.utils';
import { CartState, ChangeHandler } from './reducers.types';

const initialState: CartState = {
  hidden: true,
  items: [],
};

const changeItem: ChangeHandler = (state, newItem, count) => {
  return {
    ...state,
    items: changeCartItem(state.items, newItem, count),
  };
};

export const reducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case Types.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    case Types.ADD_CART_ITEM:
      return changeItem(state, action.payload);

    case Types.REMOVE_CART_ITEM:
      return changeItem(state, action.payload, -1);

    case Types.CLEAR_CART_ITEM:
      return changeItem(state, action.payload, -action.payload.quantity);

    default:
      return state;
  }
};
