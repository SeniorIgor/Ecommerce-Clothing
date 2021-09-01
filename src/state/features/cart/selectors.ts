import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
  selectCartReducer,
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.items
);

export const selectCountItems = createSelector(selectCartReducer, (cart) =>
  cart.items.reduce((res, item) => res + item.quantity, 0)
);
