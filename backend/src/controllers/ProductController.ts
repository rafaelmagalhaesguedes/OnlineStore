import { Request, Response } from 'express';
import { statusCode } from '../utils/httpStatusCodeMap';
import { ProductService } from '../services/ProductService';
import { IProductController } from '../interfaces/Product/IProductController';

export class ProductController implements IProductController {
  
  constructor(private productService: ProductService) {}

  async getProducts(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.productService.getProducts();
    
    return res.status(statusCode(status)).json(data);
  }

}