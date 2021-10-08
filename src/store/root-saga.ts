import { all, spawn } from 'redux-saga/effects';

import { fetchCollectionWatcher } from './features/shop/sagas';
import { userWatcher } from './features/user/sagas';

export function* rootSaga() {
  const sagas = [fetchCollectionWatcher, userWatcher];

  yield all(sagas.map((s) => spawn(s)));
}
