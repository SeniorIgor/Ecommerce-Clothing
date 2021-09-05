import { FC, memo } from 'react';

import { MenuItem } from '../menu-item';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import Style from './directory.module.scss';

const { selectSections } = selectors.directory;

export const Directory: FC = memo(() => {
  const sections = useTypedSelector(selectSections);

  return (
    <div className={Style.container}>
      {sections.map((section) => (
        <MenuItem {...section} key={section.id} />
      ))}
    </div>
  );
});
