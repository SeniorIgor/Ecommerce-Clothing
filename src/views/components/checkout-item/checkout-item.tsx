import { FC } from 'react';

import { CheckoutItemProps } from './checkout-item.types';

import Style from './checkout-item.module.scss';

export const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className={Style.container}>
      <div className={Style.imageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={Style.name}>{name}</span>
      <span className={Style.quantity}>{quantity}</span>
      <span className={Style.price}>{price}</span>
      <span className={Style.removeButton}>&#10005;</span>
    </div>
  );
};
