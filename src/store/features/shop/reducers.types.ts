import { CollectionMap } from '../../../models';
export interface State {
  collections: CollectionMap | null;
  isLoading: boolean;
}
