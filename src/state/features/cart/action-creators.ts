import { Types } from './types';

import { ToggleCartHidden } from './actions';

export const toggleCartHidden = (): ToggleCartHidden => {
  return {
    type: Types.TOGGLE_CART_HIDDEN,
  };
};
