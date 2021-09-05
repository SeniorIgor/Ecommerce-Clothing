import { FC, memo } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

import { CollectionsOverview } from '../../components/collections-overview';

import { Collection } from '../collection';

import Style from './shop.module.scss';

interface ShopProps extends RouteComponentProps {}

export const Shop: FC<ShopProps> = memo(({ match }) => {
  return (
    <div className={Style.container}>
      <Route path={`${match.path}`} component={CollectionsOverview} exact />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
});
