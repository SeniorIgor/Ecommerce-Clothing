import { FC, memo } from 'react';

import { useActions } from '../../hooks';

import { CollectionItemProps } from './collection-item.types';

import {
  Container,
  Image,
  Button,
  FooterContainer,
  Name,
  Price,
} from './collection-item.styles';

export const CollectionItem: FC<CollectionItemProps> = memo(
  ({ item, className }) => {
    const { addCartItem } = useActions();
    const { name, price, imageUrl } = item;

    return (
      <Container className={className}>
        <Image image={imageUrl} />
        <FooterContainer>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </FooterContainer>

        <Button theme="light" onClick={() => addCartItem(item)}>
          Add to cart
        </Button>
      </Container>
    );
  }
);
