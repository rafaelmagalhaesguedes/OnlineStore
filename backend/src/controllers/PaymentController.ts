import { Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';
import { statusCode } from '../utils/httpStatusCodeMap';

export class PaymentController {

  constructor(private paymentService: PaymentService) {}

  async createStripeSession(req: Request, res: Response): Promise<Response> {
    const userId = 2;
    const { order, orderItems } = req.body;

    const { status, data } = await this.paymentService.createStripeSession(userId, order, orderItems);

    return res.status(statusCode(status)).json(data);
  }
}