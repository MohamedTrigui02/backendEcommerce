const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('51OLA3QDz34si8bqzdX30gfHSAK7HgeVP7rLqsp5cCVBsqfInUr9pL2JeEldCIlYXbRNaHJ75i983UdRzBB3a8sOY00qIKlSm9b');
router.post('/', async (req, res) => {
let status, error;
const { token, amount } = req.body;
try {
await Stripe.charges.create({
source: token.id,
amount,
currency: 'usd',
});
status = 'success';
} catch (error) {

console.log(error);
status = 'Failure';
}
res.json({ error, status });
});
module.exports = router;