import { Types } from './types';
import { Action } from '../actions';

interface CartState {
  hidden: boolean;
}

const initialState: CartState = {
  hidden: true,
};

export const reducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case Types.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
