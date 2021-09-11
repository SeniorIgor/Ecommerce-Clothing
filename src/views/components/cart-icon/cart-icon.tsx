import { FC, memo } from 'react';

import { useActions, useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import { Container, Icon, ItemCount } from './cart-icon.styles';

const { selectCountItems } = selectors.cart;

export const CartIcon: FC = memo(() => {
  const count = useTypedSelector(selectCountItems);
  const { toggleCartHidden } = useActions();

  return (
    <Container onClick={toggleCartHidden}>
      <Icon />
      <ItemCount>{count}</ItemCount>
    </Container>
  );
});
