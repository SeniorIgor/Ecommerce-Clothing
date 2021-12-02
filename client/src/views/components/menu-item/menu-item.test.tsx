import { render, screen } from '@testing-library/react';

import { MenuItem } from './menu-item';
import { MenuItemProps } from './menu-item.types';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteMatch: () => ({ url: 'shop/hats' }),
}));

describe('<MenuItem />', () => {
  it('render a title', () => {
    const mockData: MenuItemProps = {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats',
    };

    render(<MenuItem {...mockData} />);
    const headerElement = screen.getByRole('heading');

    expect(headerElement).toHaveTextContent('hats');
  });
});
