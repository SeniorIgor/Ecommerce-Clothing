import { User } from '../../../models/user';

import { Types } from './types';
import { Action } from '../../root-action';

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action: Action): UserState => {
  switch (action.type) {
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        currentUser: action.payload,
      };

    case Types.SIGN_IN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case Types.GOOGLE_SIGN_IN_REQUEST:
    case Types.EMAIL_SIGN_IN_REQUEST:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
