import * as express from 'express';
import { Request, Response } from 'express';
import * as cors from 'cors';
import Stripe from 'stripe';
import router from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.post('/checkout', async (req: Request, res: Response) => {
  const items = req.body.items;

  let lineItems: { price: string; quantity: number }[] = [];

  items.forEach((item: any)=> {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel"
  });

  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});