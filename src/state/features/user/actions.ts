import { Types } from './types';

import { User } from '../../../models/user';

export interface SetCurrentUserAction {
  type: Types.SET_CURRENT_USER;
  payload: User | null;
}

export type Actions = SetCurrentUserAction;
