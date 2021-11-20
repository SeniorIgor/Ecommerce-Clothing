import { FC, memo } from 'react';

import { CollectionPreview } from '../collection-preview';
import { Spinner } from '../spinner';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { Props } from './collections-overview.types';
import { Container } from './collections-overview.styled';

const { selectCollectionsAsArray, selectLoading, selectError } = selectors.shop;

const CollectionsOverview: FC<Props> = memo(({ className }) => {
  const collections = useTypedSelector(selectCollectionsAsArray);
  const isLoading = useTypedSelector(selectLoading);
  const error = useTypedSelector(selectError);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  const collectionsView = collections!.map(({ id, ...otherProps }) => (
    <CollectionPreview {...otherProps} key={id} />
  ));

  return <Container className={className}>{collectionsView}</Container>;
});

export default CollectionsOverview;
