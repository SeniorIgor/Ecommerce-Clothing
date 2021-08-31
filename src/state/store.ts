import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducer';

const middlewares = [logger, thunk];

export const store = createStore(reducer, {}, applyMiddleware(...middlewares));
