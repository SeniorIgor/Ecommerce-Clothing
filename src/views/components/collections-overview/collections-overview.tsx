import { FC, useMemo } from 'react';

import { CollectionPreview } from '../collection-preview';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import Style from './collections-overview.module.scss';

const { selectCollectionsAsArray } = selectors.shop;

export const CollectionsOverview: FC = () => {
  const collections = useTypedSelector(selectCollectionsAsArray);

  const collectionsView = useMemo(
    () =>
      collections.map(({ id, ...otherProps }) => (
        <CollectionPreview {...otherProps} key={id} />
      )),
    [collections]
  );

  return <div className={Style.container}>{collectionsView}</div>;
};
