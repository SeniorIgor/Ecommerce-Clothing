import { takeEvery, call } from 'redux-saga/effects';

import { firestore, firebase } from '../../../services/firebase';
import { convertCollectionsToMap } from './../../../services/shop';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './action-creators';
import { Collection } from './../../../models';

import { Types } from './types';
import { CollectionSnapshot } from './reducers.types';

function* fetchCollectionRequest() {
  // yield console.log('fetchCollectionRequest');

  const collectionRef = firestore.collection('collections');
  const snapshot: CollectionSnapshot = yield collectionRef.get();
  const collectionsMap = call(convertCollectionsToMap, snapshot);

  //   collectionRef
  //     .get()
  //     .then((snapshot: any) => {
  //       const collections = convertCollectionsToMap(snapshot);
  //       dispatch(FetchCollectionsSuccess(collections));
  //     })
  //     .catch((error: Error) => {
  //       dispatch(fetchCollectionsFailure(error.message));
  //     });
}

export function* fetchCollectionWatcher() {
  yield takeEvery(Types.FETCH_COLLECTIONS_REQUEST, fetchCollectionRequest);
}
