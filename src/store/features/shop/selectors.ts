import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const selectShopReducer = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  selectShopReducer,
  (shop) => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  selectCollections,
  (collections) => collections && Object.values(collections)
);

export const selectCollection = (urlParam: string) =>
  createSelector(selectCollections, (collections) =>
    collections ? collections[urlParam] : {}
  );
