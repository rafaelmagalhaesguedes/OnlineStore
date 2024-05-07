import { Request, Response } from 'express';

export interface IProductController {
  getProducts(req: Request, res: Response): Promise<Response>;
}