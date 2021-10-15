import { createSelector } from 'reselect';

import { RootState } from '../../root-reducer';

const selectUserReducer = (state: RootState) => state.user;

export const selectUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
