import { FC } from 'react';

import { useActions } from '../../hooks';

import { CheckoutItemProps } from './checkout-item.types';

import Style from './checkout-item.module.scss';

export const CheckoutItem: FC<CheckoutItemProps> = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  const { addCartItem, removeCartItem, clearCartItem } = useActions();

  return (
    <div className={Style.container}>
      <div className={Style.imageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={Style.name}>{name}</span>
      <span className={Style.quantity}>
        <div className={Style.arrow} onClick={() => removeCartItem(item)}>
          &#10094;
        </div>
        <span className={Style.value}>{quantity}</span>
        <div className={Style.arrow} onClick={() => addCartItem(item)}>
          &#10095;
        </div>
      </span>
      <span className={Style.price}>{price}</span>
      <span className={Style.removeButton} onClick={() => clearCartItem(item)}>
        &#10005;
      </span>
    </div>
  );
};
