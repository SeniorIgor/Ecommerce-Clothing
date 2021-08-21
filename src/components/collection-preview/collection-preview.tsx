import React, { useMemo, memo } from 'react';

import { CollectionItem } from '../collection-item';

import { ICollectionItem } from '../../models/collection';

import Style from './collection-preview.module.scss';

interface CollectionPreviewProps {
  title: string;
  items: ICollectionItem[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = memo(
  ({ title, items }) => {
    const preview = useMemo(
      () =>
        items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem {...otherProps} key={id} />
          )),
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
