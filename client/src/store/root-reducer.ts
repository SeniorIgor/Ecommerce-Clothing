import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import * as reducers from './features/reducers';

const whitelist: Array<keyof typeof reducers> = ['cart'];

const persistConfig = {
  key: 'root',
  storage,
  whitelist,
};

const rootReducer = combineReducers(reducers);

export const reducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
