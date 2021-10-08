import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import { rootSaga } from './root-saga';
import { reducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export { store };
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
