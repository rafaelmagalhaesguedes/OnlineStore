import { Request, Response } from 'express';
import { statusCode } from '../utils/httpStatusCodeMap';
import { CustomerService } from '../services/CustomerService';

/**
 * Customer controller
 * 
 * @export
 * @class CustomerController
 */
export class CustomerController {
    
  /**
   * Creates an instance of CustomerController.
   */
  constructor(private customerService: CustomerService) {}


  /**
   * Get all customers
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async getCustomers(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.customerService.getCustomers();

    return res.status(statusCode(status)).json(data);
  }

  /**
   * Create a customer
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async createCustomer(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user.id;
    const customer = req.body;

    const { status, data } = await this.customerService.createCustomer(userId, customer);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Find a customer by id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async findCustomerById(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id, 10);

    const { status, data } = await this.customerService.findCustomerById(id);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Find a customer by user id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async findCustomerByUserId(req: Request, res: Response): Promise<Response> {
    const userId = parseInt(req.params.userId, 10);

    const { status, data } = await this.customerService.findCustomerByUserId(userId);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Update a customer
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async updateCustomer(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user.id;
    const customer = req.body;

    const { status, data } = await this.customerService.updateCustomer(userId, customer);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Delete a customer
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async deleteCustomer(_req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user.id;

    const { status, data } = await this.customerService.deleteCustomer(userId);

    return res.status(statusCode(status)).json(data);
  }

}