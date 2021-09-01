import { FC, useMemo, memo } from 'react';

import { CollectionItem } from '../collection-item';

import { CollectionPreviewProps } from './collection-preview.types';

import Style from './collection-preview.module.scss';

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
      <div className={Style.container}>
        <h1 className={Style.title}>{title}</h1>
        <div className={Style.preview}>{preview}</div>
      </div>
    );
  }
);
