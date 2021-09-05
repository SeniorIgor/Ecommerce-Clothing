import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const collectionMap: { [key: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopReducer = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  selectShopReducer,
  (shop) => shop.collections
);

export const selectCollection = (urlParam: string) =>
  createSelector(selectShopCollections, (collections) =>
    collections.find(({ id }) => id === collectionMap[urlParam])
  );
