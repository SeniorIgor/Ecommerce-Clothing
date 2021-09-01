import { FC, memo } from 'react';

import { CartItemProps } from './cart-item.types';

import Style from './cart-item.module.scss';

export const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className={Style.container}>
      <img src={imageUrl} alt="item" />
      <div className={Style.itemDetails}>
        <span className={Style.name}>{name}</span>
        <span className={Style.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});
