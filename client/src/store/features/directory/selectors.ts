import { createSelector } from 'reselect';

import { RootState } from '../../root-reducer';

const selectDirectoryReducer = (state: RootState) => state.directory;

export const selectSections = createSelector(
  selectDirectoryReducer,
  (directory) => directory.sections
);
