import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const selectShopReducer = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  selectShopReducer,
  (shop) => shop.collections
);
