import { takeLatest, call, fork, put, all } from 'redux-saga/effects';

import { convertCollectionsToMap } from '../../../services/shop';
import { firestore } from '../../../services/firebase';
import { CollectionSnapshot } from './reducers.types';
import { CollectionMap } from './../../../models';
import { Types } from './types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './action-creators';

function* fetchCollectionRequest() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot: CollectionSnapshot = yield collectionRef.get();
    const collectionsMap: CollectionMap = yield call(
      convertCollectionsToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure((err as Error).message));
  }
}

function* fetchCollectionWatcher() {
  yield takeLatest(Types.FETCH_COLLECTIONS_REQUEST, fetchCollectionRequest);
}

export function* shopWatcher() {
  const sagas = [fetchCollectionWatcher];

  yield all(sagas.map((s) => fork(s)));
}
