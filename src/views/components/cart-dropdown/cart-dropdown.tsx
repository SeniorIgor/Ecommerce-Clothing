import { FC, useMemo, memo } from 'react';

import { Button } from '../button';
import { CartItem } from '../cart-item';

import { useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import Style from './cart-dropdown.module.scss';

export const CartDropdown: FC = memo(() => {
  const { selectCartItems } = selectors.cart;
  const items = useTypedSelector(selectCartItems);

  const itemsView = useMemo(() => {
    return items.map((item) => <CartItem item={item} />);
  }, [items]);

  return (
    <div className={Style.container}>
      <div className={Style.cartItems}>{itemsView}</div>
      <Button>Go to checkout</Button>
    </div>
  );
});
