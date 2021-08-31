import { User } from '../../../models/user';

import { Types } from './types';

import { SetCurrentUserAction } from './actions';

export const setCurrentUser = (user: User | null): SetCurrentUserAction => {
  return {
    type: Types.SET_CURRENT_USER,
    payload: user,
  };
};
