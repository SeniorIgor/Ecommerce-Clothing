import { FC, memo } from 'react';

import { MenuItem } from '../menu-item';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { Container } from './directory.styles';

const { selectSections } = selectors.directory;

export const Directory: FC = memo(() => {
  const sections = useTypedSelector(selectSections);

  return (
    <Container>
      {sections.map((section) => (
        <MenuItem {...section} key={section.id} />
      ))}
    </Container>
  );
});
