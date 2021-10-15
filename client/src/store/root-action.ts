import { Actions as UserActions } from './features/user/actions';
import { Actions as CartActions } from './features/cart/actions';
import { Actions as ShopActions } from './features/shop/actions';

export type Action = UserActions | CartActions | ShopActions;
