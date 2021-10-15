import { FC, memo } from 'react';

import { CartItemProps } from './cart-item.types';

import { Container, Image, ItemDetails } from './cart-item.styles';

export const CartItem: FC<CartItemProps> = memo(({ item }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <Container>
      <Image src={imageUrl} alt="item" />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </Container>
  );
});
