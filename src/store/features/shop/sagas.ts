import { takeEvery } from 'redux-saga/effects';

import { Types } from './types';

function* fetchCollectionRequest() {
  yield console.log('fetchCollectionRequest');
}

export function* fetchCollectionWatcher() {
  yield takeEvery(Types.FETCH_COLLECTIONS_REQUEST, fetchCollectionRequest);
}
