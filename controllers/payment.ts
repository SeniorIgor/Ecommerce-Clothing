import { RequestHandler } from 'express';

const config = require('../config');
const stripe = require('stripe')(config.STRIPE_SECRET_KEY);

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

  stripe.charges.create(body, (stripeErr: Error, stripeRes: string) => {
    if (stripeErr) {
      res.status(500).send({
        message: stripeErr,
      });
    } else {
      res.status(200).send({
        message: stripeRes,
      });
    }
  });
};
