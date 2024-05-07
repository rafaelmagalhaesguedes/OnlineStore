import { Request, Response } from 'express';

export interface ICheckOutController {
  createStripeSession(req: Request, res: Response): Promise<Response>;
}