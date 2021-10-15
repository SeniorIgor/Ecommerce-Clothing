import { FC } from 'react';
import { Token } from 'react-stripe-checkout';
import axios from 'axios';

import { StripeButtonProps } from './stripe-button.types';
import { StripeCheckout } from './stripe-button.styles';

interface Response {
  message: string;
}

export const StripeButton: FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeKey = process.env.REACT_APP_STRIPE_KEY as string;

  const onToken = (token: Token) => {
    axios
      .request<Response>({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      })
      .then((response) => {
        console.log('Payment successful', response.data.message);
      })
      .catch((err) => {
        console.log('Payment error:', err);
      });
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
