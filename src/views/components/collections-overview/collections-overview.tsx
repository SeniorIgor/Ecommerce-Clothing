import { FC, useMemo } from 'react';

import { CollectionPreview } from '../collection-preview';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import { Container } from './collections-overview.styled';

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

  return <Container>{collectionsView}</Container>;
};
