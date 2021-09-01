import { FC, memo } from 'react';

import { useActions, useTypedSelector } from '../../hooks';
import { selectors } from '../../../state';

import { ReactComponent as ShoppingCart } from '../../../assets/images/shopping-bag.svg';

import Style from './cart-icon.module.scss';

const { selectCountItems } = selectors.cart;

export const CartIcon: FC = memo(() => {
  const count = useTypedSelector(selectCountItems);
  const { toggleCartHidden } = useActions();

  return (
    <div className={Style.container} onClick={toggleCartHidden}>
      <ShoppingCart className={Style.shoppingIcon} />
      <span className={Style.itemCount}>{count}</span>
    </div>
  );
});
