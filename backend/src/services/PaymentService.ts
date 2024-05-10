import Stripe from 'stripe';
import { ICheckOutURL } from '../interfaces/ICheckOut';
import { IOrder } from '../interfaces/IOrder';
import { OrderModel } from '../models/OrderModel';
import { OrderService } from './OrderService';
import { UserModel } from '../models/UserModel';
import { CustomerModel } from '../models/CustomerModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { OrderItem } from 'sequelize';

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
  async createStripeSession(userId: number, order: IOrder, items: any[]):
  Promise<ServiceResponse<ICheckOutURL>> {

    const customer = await this.customerModel.findOne({ where: { userId } });

    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Customer not found' } };
    }

    let lineItems: any[] = [];

    items.forEach((item) => {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
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

    if (session) {
      await this.orderService.createOrder(
        { ...order, orderDate: new Date(), customerId: customer.id, status: 'Pending' }, items,
      );
      console.log('Order created');
    }

    return { status: 'SUCCESSFUL', data: { url: session.url } as ICheckOutURL };
  }


  /**
   * Handle Stripe Webhook
   * 
   * @param {Stripe.Event} event
   */
  async handleStripeWebhook(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === 'paid') {
      const order = await this.orderService.updateOrder(
        session.client_reference_id as any, { status: 'Paid' } as IOrder,
      );

      if (!order) {
        console.log('Order not found');
      }
    }
  }
  
}