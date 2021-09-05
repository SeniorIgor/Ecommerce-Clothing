import { Action } from '../actions';

import { ShopState } from './reducers.types';
import { collections } from './reducers.data';

const initialState: ShopState = { collections };

export const reducer = (state = initialState, action: Action): ShopState => {
  switch (action.type) {
    default:
      return state;
  }
};
