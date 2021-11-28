import { shallow } from 'enzyme';

import { CartItem } from './cart-item';

const mockItem = {
  id: 1,
  name: 'Palm Tree Cap',
  imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
  price: 2000,
  quantity: 1,
};

it('expect to render Card component', () => {
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
