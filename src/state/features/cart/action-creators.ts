import { CollectionItem } from './../../../models';
import { Types } from './types';

import { ToggleCartHidden, AddItem } from './actions';

export const toggleCartHidden = (): ToggleCartHidden => {
  return {
    type: Types.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item: CollectionItem): AddItem => {
  return {
    type: Types.ADD_ITEM,
    payload: item,
  };
};
