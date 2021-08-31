import { User } from '../../../models/user';

import { Types } from './types';
import { Action } from '../actions';

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const reducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case Types.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};
