import { Action } from '../actions';
import { Types } from './types';

import { ShopState } from './reducers.types';

const initialState: ShopState = {
  collections: null,
  isLoading: true,
  error: null,
};

export const reducer = (state = initialState, action: Action): ShopState => {
  switch (action.type) {
    case Types.FETCH_COLLECTIONS_REQUEST:
      return { ...state, isLoading: true };

    case Types.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isLoading: false };

    case Types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        collections: null,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
