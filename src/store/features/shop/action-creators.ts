import { Dispatch } from 'redux';

import { CollectionMap } from '../../../models';
import { firestore } from '../../../services/firebase';
import { convertCollectionsToMap } from '../../../services/shop';

import { Types } from './types';
import {
  Actions,
  FetchCollectionsRequest,
  FetchCollectionsSuccess,
  FetchCollectionsFailure,
} from './actions';

export const fetchCollectionsRequest = (): FetchCollectionsRequest => {
  return {
    type: Types.FETCH_COLLECTIONS_REQUEST,
  };
};

const fetchCollectionsSuccess = (
  collections: CollectionMap
): FetchCollectionsSuccess => {
  return {
    type: Types.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

const fetchCollectionsFailure = (error: string): FetchCollectionsFailure => {
  return {
    type: Types.FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};

export const fetchCollections = () => (dispatch: Dispatch<Actions>) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsRequest());

  collectionRef
    .get()
    .then((snapshot) => {
      const collections = convertCollectionsToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collections));
    })
    .catch((error: Error) => {
      dispatch(fetchCollectionsFailure(error.message));
    });
};
