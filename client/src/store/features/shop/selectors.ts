import { createSelector } from 'reselect';

import { RootState } from '../../root-reducer';

const selectShopReducer = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  selectShopReducer,
  (shop) => shop.collections
);

export const selectLoading = createSelector(
  selectShopReducer,
  (shop) => shop.isLoading
);

export const selectError = createSelector(
  selectShopReducer,
  (shop) => shop.error
);

export const selectCollectionsAsArray = createSelector(
  selectCollections,
  (collections) => collections && Object.values(collections)
);

export const selectCollection = (urlParam: string) =>
  createSelector(selectCollections, (collections) =>
    collections ? collections[urlParam] : null
  );
