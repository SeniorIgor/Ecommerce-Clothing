import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { reducer, RootState } from './reducer';
import { Action } from './index';

const middlewares = [thunk as ThunkMiddleware<RootState, Action>];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(reducer, {}, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
