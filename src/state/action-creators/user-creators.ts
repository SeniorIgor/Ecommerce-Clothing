import { User } from './../../models';

import { ActionType } from '../action-types';

import { SetCurrentUserAction } from '../actions/user-actions';

export const setCurrentUser = (user: User | null): SetCurrentUserAction => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
