import { Action } from '../actions';
import { Types } from './types';

import { State } from './reducers.types';

const initialState: State = { collections: null, isLoading: true };

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case Types.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload, isLoading: false };

    default:
      return state;
  }
};
