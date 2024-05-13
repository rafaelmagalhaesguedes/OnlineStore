import Stripe from 'stripe';
import { OrderService } from './OrderService';
import { ICheckOutURL } from '../interfaces/ICheckOut';
import { CustomerModel } from '../models/CustomerModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

// Create a new instance of Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET as string);

/**
 * Payment Service
 * 
 * @export
 * @class PaymentService
 */
export class PaymentService {
  
  /**
   * Creates an instance of PaymentService.
   */
  constructor(private customerModel: CustomerModel, private orderService: OrderService) {}


  /**
   * Create a new Stripe session
   * 
   * @param {ICheckOutBody[]} items
   * @returns {Promise<ICheckOutURL>}
   */
  async createStripeSession(userId: number, items: any[]): Promise<ServiceResponse<ICheckOutURL>> {

    const customer = await this.customerModel.findOne({ where: { userId } });

    console.log(items);

    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    let lineItems: any[] = [];

    items.forEach((item) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      client_reference_id: customer.userId.toString(),
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    if (!session) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Session not created' } };
    }

    // Ship the order 5 days from now
    let shippedDate = new Date();

    const order: any = {
      shippedDate: shippedDate.setDate(shippedDate.getDate() + 5), // 5 days from now
      orderDate: new Date(),
      customerId: customer.id,
      status: 'Pending',
    };

    const addItem: any[] = [];

    items.forEach((item) => {
      addItem.push({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        totalPrice: item.quantity * item.price,
      });
    });

    await this.orderService.createOrder(order, addItem);

    return { status: 'SUCCESSFUL', data: { url: session.url } as ICheckOutURL };
  }


  /**
   * Handle Stripe Webhook
   * 
   * @param {Stripe.Event} event
   */
  async handleStripeWebhooks(sig: string[], event: Stripe.Event) {
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
    const session = event.data.object as Stripe.Checkout.Session;

    let stripeEvent: Stripe.Event;

    try {
      stripeEvent = stripe.webhooks.constructEvent(String(event), sig, endpointSecret);
    } catch (err) {
      return { status: 'BAD_REQUEST', data: { message: 'Invalid payload' } };
    }

    if (stripeEvent.type === 'checkout.session.completed') {
      const customer = await this.customerModel.findOne({ where: { userId: session.client_reference_id } });

      if (!customer) {
        return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
      }

      await this.orderService.updateOrderStatus(customer.id, 'Paid');
    }

    return { status: 'SUCCESSFUL', data: { message: 'Webhook received' } };
  }

}