import React, { useState, memo } from 'react';

import { MenuItem } from '../menu-item';

import { directory } from '../../data/home/directory';

import Style from './directory.module.scss';

export const Directory: React.FC = memo(() => {
  const [sections] = useState(directory);

  return (
    <div className={Style.container}>
      {sections.map((section) => (
        <MenuItem {...section} key={section.id} />
      ))}
    </div>
  );
});
