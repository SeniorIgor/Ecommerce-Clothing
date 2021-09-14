import { FC, memo } from 'react';

import { CollectionPreview } from '../components/collection-preview';

import { useTypedSelector } from '../hooks';
import { selectors } from '../../store';

import { Container } from './collections-overview.styled';

const { selectCollectionsAsArray } = selectors.shop;

export const CollectionsOverview: FC = memo(() => {
  const collections = useTypedSelector(selectCollectionsAsArray)!;

  const collectionsView = collections.map(({ id, ...otherProps }) => (
    <CollectionPreview {...otherProps} key={id} />
  ));

  return <Container>{collectionsView}</Container>;
});
