import { CollectionMap } from '../../../models';

import { Types } from './types';
import {
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
