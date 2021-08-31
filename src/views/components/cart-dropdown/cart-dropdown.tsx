import { FC } from 'react';

import { Button } from '../button';

import Style from './cart-dropdown.module.scss';

export const CartDropdown: FC = () => {
  return (
    <div className={Style.container}>
      <div className={Style.cartItems} />
      <Button>Go to checkout</Button>
    </div>
  );
};
