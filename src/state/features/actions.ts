import { Actions as UserActions } from './user/actions';
import { Actions as CartActions } from './cart/actions';

export type Action = UserActions | CartActions;
