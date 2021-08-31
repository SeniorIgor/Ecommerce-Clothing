import { createSelector } from 'reselect';

import { RootState } from '../../reducer';

const selectUserReducer = (state: RootState) => state.user;

export const selectUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
