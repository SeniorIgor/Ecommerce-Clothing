"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePayment = void 0;
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});
const makePayment = (req, res, next) => {
    const { token, amount } = req.body;
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
exports.makePayment = makePayment;
