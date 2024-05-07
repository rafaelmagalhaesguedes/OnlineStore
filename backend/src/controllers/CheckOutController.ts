import { Request, Response } from 'express';
import { CheckOutService } from '../services/CheckOutService';
import { ICheckOutController } from '../interfaces/CheckOut/ICheckOutController';

export class CheckOutController implements ICheckOutController {

  constructor(private checkOutService: CheckOutService) {}

  async createStripeSession(req: Request, res: Response): Promise<Response> {
    const { items } = req.body;
    const response = await this.checkOutService.createStripeSession(items);
    return res.status(200).json(response);
  }
}