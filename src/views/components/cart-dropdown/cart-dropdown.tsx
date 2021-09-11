import { FC, useMemo, memo } from 'react';
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { CartItem } from '../cart-item';

import { useActions, useTypedSelector } from '../../hooks';
import { selectors } from '../../../store';

import {
  Container,
  Message,
  CartItemsContainer,
  CartItems,
  Button,
} from './cart-dropdown.styles';

import 'react-perfect-scrollbar/dist/css/styles.css';

type HandleClick = React.MouseEventHandler<HTMLButtonElement>;

const { selectCartItems } = selectors.cart;

const scrollBarProps = {
  wheelPropagation: false,
};

export const CartDropdown: FC = memo(() => {
  const items = useTypedSelector(selectCartItems);
  const { toggleCartHidden } = useActions();

  const history = useHistory();

  const handleClick: HandleClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  const itemsView = useMemo(() => {
    return items.map((item) => <CartItem item={item} key={item.id} />);
  }, [items]);

  return (
    <Container>
      <CartItemsContainer>
        {items.length ? (
          <PerfectScrollbar options={scrollBarProps}>
            <CartItems>{itemsView}</CartItems>
          </PerfectScrollbar>
        ) : (
          <Message>Your cart is empty</Message>
        )}
      </CartItemsContainer>
      <Button onClick={handleClick}>Go to checkout</Button>
    </Container>
  );
});
