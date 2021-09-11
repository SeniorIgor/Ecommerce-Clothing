import { CollectionMap } from '../../../models';

import { Types } from './types';
import { UpdateCollections } from './actions';

export const updateCollections = (
  collections: CollectionMap
): UpdateCollections => {
  return {
    type: Types.UPDATE_COLLECTIONS,
    payload: collections,
  };
};
