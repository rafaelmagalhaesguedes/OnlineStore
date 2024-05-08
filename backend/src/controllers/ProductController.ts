import { Request, Response } from 'express';
import { statusCode } from '../utils/httpStatusCodeMap';
import { ProductService } from '../services/ProductService';

/**
 * Product Controller
 * 
 * @export
 * @class ProductController
 */
export class ProductController {
  
  /**
   * Creates an instance of ProductController.
   */
  constructor(private productService: ProductService) {}


  /**
   * Get all products
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<Response>}
   * @memberof ProductController
   */
  async getProducts(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.productService.getProducts();
    
    return res.status(statusCode(status)).json(data);
  }


  /**
   * Get a product by id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   * @memberof ProductController
   */
  async getProductById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.productService.getProductById(+id);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Create a new product
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   * @memberof ProductController
   */
  async createProduct(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.productService.createProduct(req.body);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Update a product
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   * @memberof ProductController
   */
  async updateProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.productService.updateProduct(+id, req.body);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Delete a product
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   * @memberof ProductController
   */
  async deleteProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.productService.deleteProduct(+id);

    return res.status(statusCode(status)).json(data);
  }

}