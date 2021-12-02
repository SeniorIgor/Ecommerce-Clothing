import { FC, useMemo, memo } from 'react';

import { CollectionItem } from '../collection-item';

import { CollectionPreviewProps } from './collection-preview.types';

import { Container, Title, Preview } from './collection-preview.styles';

export const CollectionPreview: FC<CollectionPreviewProps> = memo(
  ({ title, items }) => {
    const preview = useMemo(
      () =>
        items
          .filter((_, idx) => idx < 4)
          .map((item) => <CollectionItem item={item} key={item.id} />),
      [items]
    );

    return (
      <Container>
        <Title>{title}</Title>
        <Preview role="list">{preview}</Preview>
      </Container>
    );
  }
);
