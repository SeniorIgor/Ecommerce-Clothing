import { ActionType } from '../action-types';

import { User } from '../../models';

export interface SetCurrentUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: User | null;
}

export type UserAction = SetCurrentUserAction;
