import { User } from '../../models';

import { ActionType } from '../action-types';
import { Action } from '../actions';

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userReducer = (
  state = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case ActionType.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
