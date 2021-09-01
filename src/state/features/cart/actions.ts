import { ICollectionItem } from '../../../models';

import { Types } from './types';

export interface ToggleCartHidden {
  type: Types.TOGGLE_CART_HIDDEN;
}

export interface AddItem {
  type: Types.ADD_ITEM;
  payload: ICollectionItem;
}

export type Actions = ToggleCartHidden | AddItem;
