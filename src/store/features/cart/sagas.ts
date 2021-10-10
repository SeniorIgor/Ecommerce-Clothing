import { all, fork, takeLatest, put } from 'redux-saga/effects';

import { Types as UserTypes } from '../user/types';
import { clearCart } from './action-creators';

function* clearCartWorker() {
  yield put(clearCart());
}

function* onSignOutSuccessWatcher() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartWorker);
}

export function* cartWatcher() {
  const sagas = [onSignOutSuccessWatcher];

  yield all(sagas.map((s) => fork(s)));
}
