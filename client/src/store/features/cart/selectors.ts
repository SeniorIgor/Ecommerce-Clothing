import { createSelector } from 'reselect';

import { RootState } from '../../root-reducer';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartHidden = createSelector(
  selectCartReducer,
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.items
);

export const selectCountItems = createSelector(selectCartItems, (items) =>
  items.reduce((res, item) => res + item.quantity, 0)
);

export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items.reduce((res, { price, quantity }) => res + price * quantity, 0)
);
