import React, { useState } from 'react';

import { MenuItem } from '../menu-item';

import { data } from './directory.data';

import Style from './directory.module.scss';

export const Directory: React.FC = () => {
  const [sections] = useState(data);

  return (
    <div className={Style.container}>
      {sections.map(({ id, ...section }) => (
        <MenuItem {...section} key={id} />
      ))}
    </div>
  );
};
