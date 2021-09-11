import { FC, useMemo } from 'react';

import { CollectionPreview } from '../collection-preview';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { Container } from './collections-overview.styled';

const { selectCollectionsAsArray } = selectors.shop;

export const CollectionsOverview: FC = () => {
  const collections = useTypedSelector(selectCollectionsAsArray);

  if (!collections) return <span>Loading...</span>;

  const collectionsView = useMemo(
    () =>
      collections.map(({ id, ...otherProps }) => (
        <CollectionPreview {...otherProps} key={id} />
      )),
    [collections]
  );

  return <Container>{collectionsView}</Container>;
};
