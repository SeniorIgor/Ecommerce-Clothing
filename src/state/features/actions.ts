import { Actions as UserActions } from './user/actions';
import { Actions as CartActions } from './cart/actions';
import { Actions as ShopActions } from './shop/actions';

export type Action = UserActions | CartActions | ShopActions;
