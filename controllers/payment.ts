import { RequestHandler } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2020-08-27',
});

interface MakePaymentRequestBody {
  token: {
    id: string;
  };
  amount: number;
}

export const makePayment: RequestHandler = (req, res, next) => {
  const { token, amount } = req.body as MakePaymentRequestBody;
  const body = {
    source: token.id,
    amount,
    currency: 'usd',
  };

  stripe.charges
    .create(body)
    .then((stripeRes) => {
      res.status(200).send({
        message: stripeRes,
      });
    })
    .catch((stripeErr) => {
      res.status(500).send({
        message: stripeErr,
      });
    });
};
