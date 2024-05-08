import { Request, Response } from 'express';
import {
  requestBodySchema,
  requestParamsSchema,
  updateRequestBodySchema,
} from '../middlewares/validateSchemas/productSchemas';

/**
 * Product Middleware
 * 
 * @export
 * @class ProductMiddleware
 */
export class ProductMiddleware {

  /**
   * Validate request body
   */
  public static validateRequestBody(req: Request, res: Response, next: Function) {
    const { name, price, priceId, quantity, image } = req.body;

    const { error } = requestBodySchema.validate({ name, price, priceId, quantity, image });

    if (error) {
      return res.status(400).json({ error: error.message });
    }
    
    return next();
  }

  /**
   * Validate request params
   */
  public static validateRequestParams(req: Request, res: Response, next: Function) {
    const { id } = req.params;

    const { error } = requestParamsSchema.validate({ id });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return next();
  }

  /**
   * Validate update request body
   */
  public static validateUpdateRequestBody(req: Request, res: Response, next: Function) {
    const { name, price, priceId, quantity, image } = req.body;

    const { error } = updateRequestBodySchema.validate({ name, price, priceId, quantity, image });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return next();
  }
}