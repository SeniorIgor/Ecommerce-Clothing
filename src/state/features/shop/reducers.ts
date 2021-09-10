import { Action } from '../actions';
import { Types } from './types';

import { ShopState } from './reducers.types';

const initialState: ShopState = { collections: {} };

export const reducer = (state = initialState, action: Action): ShopState => {
  switch (action.type) {
    case Types.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };

    default:
      return state;
  }
};
