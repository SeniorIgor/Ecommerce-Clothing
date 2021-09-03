import { FC, useMemo, memo } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../button';
import { CartItem } from '../cart-item';

import { useActions, useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import Style from './cart-dropdown.module.scss';

type HandleClick = React.MouseEventHandler<HTMLButtonElement>;

const { selectCartItems } = selectors.cart;

export const CartDropdown: FC = memo(() => {
  const items = useTypedSelector(selectCartItems);
  const { toggleCartHidden } = useActions();

  const history = useHistory();

  const handleClick: HandleClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

  const itemsView = useMemo(() => {
    return items.map((item) => <CartItem item={item} />);
  }, [items]);

  return (
    <div className={Style.container}>
      <div className={Style.cartItemsContainer}>
        <div className={Style.cartItems}>
          {items.length ? (
            itemsView
          ) : (
            <span className={Style.message}>Your cart is empty</span>
          )}
        </div>
      </div>
      <Button onClick={handleClick}>Go to checkout</Button>
    </div>
  );
});
