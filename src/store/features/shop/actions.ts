import { Types } from './types';

import { CollectionMap } from '../../../models';

export interface UpdateCollections {
  type: Types.UPDATE_COLLECTIONS;
  payload: CollectionMap;
}

export type Actions = UpdateCollections;
