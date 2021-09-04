import { FC, useMemo, memo } from 'react';
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Button } from '../button';
import { CartItem } from '../cart-item';

import { useActions, useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import 'react-perfect-scrollbar/dist/css/styles.css';
import Style from './cart-dropdown.module.scss';

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
    <div className={Style.container}>
      <div className={Style.cartItemsContainer}>
        {items.length ? (
          <PerfectScrollbar options={scrollBarProps}>
            <div className={Style.cartItems}>{itemsView}</div>
          </PerfectScrollbar>
        ) : (
          <span className={Style.message}>Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleClick}>Go to checkout</Button>
    </div>
  );
});
