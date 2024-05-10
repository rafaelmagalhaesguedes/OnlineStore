import * as express from 'express';
import { Request, Router, Response } from 'express';
import { OrderModel } from '../models/OrderModel';
import { OrderItemModel } from '../models/OrderItemModel';
import { CustomerModel } from '../models/CustomerModel';
import { OrderService } from '../services/OrderService';
import { PaymentService } from '../services/PaymentService';
import { PaymentController } from '../controllers/PaymentController';

/**
 * Payment Routes
 * 
 * @export
 * @class PaymentRoutes
 * @return {Router}
 */
class PaymentRoutes {
  public router: Router;
  private paymentController: PaymentController;

  constructor(paymentController: PaymentController) {
    this.router = Router();
    this.paymentController = paymentController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      '/',
      (req: Request, res: Response) => this.paymentController.createStripeSession(req, res),
    );

    this.router.post(
      '/webhook',
      express.raw({type: 'application/json'}),
      (req: Request, res: Response) => this.paymentController.handleStripeWebhook(req, res),
    );
  }
}

/**
 * Instances of OrderModel, PaymentService, PaymentController, and PaymentRoutes
 */
const customerModel = new CustomerModel();
const orderModel = new OrderModel();
const orderItemModel = new OrderItemModel();
const orderService = new OrderService(orderModel, orderItemModel);
const paymentService = new PaymentService(customerModel, orderService);
const paymentController = new PaymentController(paymentService);
const paymentRoutes = new PaymentRoutes(paymentController);

export default paymentRoutes.router;