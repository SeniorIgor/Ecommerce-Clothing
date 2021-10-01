import { firestore } from './../../../services/firebase';
import { Dispatch } from 'redux';

import { CollectionMap } from '../../../models';
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

export const fetchCollectionsSuccess = (
  collections: CollectionMap
): FetchCollectionsSuccess => {
  return {
    type: Types.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (
  error: string
): FetchCollectionsFailure => {
  return {
    type: Types.FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};

export const fetchCollections = () => (dispatch: Dispatch<Actions>) => {
  // const collectionRef = firestore.collection('collections');
  // dispatch(fetchCollectionsRequest());
  // collectionRef
  //   .get()
  //   .then((snapshot: any) => {
  //     const collections = convertCollectionsToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collections));
  //   })
  //   .catch((error: Error) => {
  //     dispatch(fetchCollectionsFailure(error.message));
  //   });
};
