import { combineReducers } from 'redux';

import * as reducers from './features/reducers';

export const reducer = combineReducers(reducers);
export type RootState = ReturnType<typeof reducer>;
