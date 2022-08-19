const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51LSBhWC6sD00UodKkUGbqGUAnfIp712P7TKX9xmY2fs6xdmY0f7Py9SlKuSSKihHelgxMlwDJNaEafAg25EvOtRa00gof627sB');



router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;