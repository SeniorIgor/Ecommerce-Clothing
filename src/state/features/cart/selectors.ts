import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
  selectCartReducer,
  (cart) => cart.hidden
);
