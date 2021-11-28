import { shallow } from 'enzyme';

import { Button } from './button';

it('expect to render Card component', () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});
