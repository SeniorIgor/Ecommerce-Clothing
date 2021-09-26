import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import { shop } from './features/saga';
import { reducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

export const store = createStore(reducer, {}, applyMiddleware(...middlewares));

const { fetchCollectionWatcher } = shop;
sagaMiddleware.run(fetchCollectionWatcher);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
