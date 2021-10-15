import { all, spawn } from 'redux-saga/effects';

import { shopWatcher } from './features/shop/sagas';
import { userWatcher } from './features/user/sagas';
import { cartWatcher } from './features/cart/sagas';

export function* rootSaga() {
  const sagas = [shopWatcher, userWatcher, cartWatcher];

  yield all(sagas.map((s) => spawn(s)));
}
