import { CollectionItem } from '../../../models';

import { Types } from './types';

export interface ToggleCartHidden {
  type: Types.TOGGLE_CART_HIDDEN;
}

export interface AddItem {
  type: Types.ADD_ITEM;
  payload: CollectionItem;
}

export type Actions = ToggleCartHidden | AddItem;
