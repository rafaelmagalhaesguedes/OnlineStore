import { ICheckOutBody, ICheckOutURL } from '../interfaces/ICheckOut';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

const URL_SUCCESS = "http://localhost:5173/success";
const URL_CANCEL = "http://localhost:5173/cancel";

export class CheckOutService {

  async createStripeSession(items: ICheckOutBody[]): Promise<ICheckOutURL> {
    let lineItems: ICheckOutBody[] = [];

    items.forEach((item: any) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: URL_SUCCESS,
      cancel_url: URL_CANCEL,
    });

    return { url: session.url } as ICheckOutURL;
  }
}