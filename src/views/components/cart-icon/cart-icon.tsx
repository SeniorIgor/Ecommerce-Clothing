import { FC } from 'react';

import { useActions } from '../../hooks';

import { ReactComponent as ShoppingCart } from '../../../assets/images/shopping-bag.svg';

import Style from './cart-icon.module.scss';

export const CartIcon: FC = () => {
  const { toggleCartHidden } = useActions();

  return (
    <div className={Style.container} onClick={toggleCartHidden}>
      <ShoppingCart className={Style.shoppingIcon} />
      <span className={Style.itemCount}>0</span>
    </div>
  );
};
