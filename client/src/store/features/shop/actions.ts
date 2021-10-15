import { Types } from './types';

import { CollectionMap } from '../../../models';

export interface FetchCollectionsRequest {
  type: Types.FETCH_COLLECTIONS_REQUEST;
}

export interface FetchCollectionsSuccess {
  type: Types.FETCH_COLLECTIONS_SUCCESS;
  payload: CollectionMap;
}

export interface FetchCollectionsFailure {
  type: Types.FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export type Actions =
  | FetchCollectionsRequest
  | FetchCollectionsSuccess
  | FetchCollectionsFailure;
