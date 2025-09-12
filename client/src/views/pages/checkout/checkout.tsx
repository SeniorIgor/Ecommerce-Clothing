import { FC, memo } from 'react';

import { CheckoutItem } from '../../components/checkout-item';
import { StripeButton } from '../../components/stripe-button';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { selectors } from '../../../store';

import { data } from './checkout.data';

import {
  Container,
  HeaderContainer,
  HeaderColumn,
  Total,
  Message,
} from './checkout.styles';

const { selectCartItems, selectCartTotal } = selectors.cart;

const Checkout: FC = memo(() => {
  const items = useTypedSelector(selectCartItems);
  const total = useTypedSelector(selectCartTotal);

  const itemsView = items.map((item) => (
    <CheckoutItem item={item} key={item.id} />
  ));

  const headerView = data.map(({ id, title }) => (
    <HeaderColumn key={id}>
      <span>{title}</span>
    </HeaderColumn>
  ));

  return (
    <Container>
      <HeaderContainer>{headerView}</HeaderContainer>
      {itemsView}

      <Total>Total: ${total}</Total>
      <Message
        href="https://stripe.com/docs/testing#cards"
        target="_blank"
        rel="noreferrer"
      >
        *Please use the following test credit card for payments* <br />
        4242 4242 4242 4242&nbsp;&mdash; Exp: 01/30&nbsp;&mdash; CVV: 123 <br />
      </Message>
      <StripeButton price={total} />
    </Container>
  );
});

export default Checkout;
