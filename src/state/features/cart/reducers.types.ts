import { CartItem } from '../../../models';
export interface CartState {
  hidden: boolean;
  items: CartItem[];
}
