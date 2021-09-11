import { FC } from 'react';
import { Token } from 'react-stripe-checkout';

import { StripeButtonProps } from './stripe-button.types';
import { StripeCheckout } from './stripe-button.styles';

export const StripeButton: FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeKey = process.env.REACT_APP_STRIPE_KEY as string;

  const onToken = (token: Token) => {
    console.log('Payment successful', token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Ecommerce-clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
};
