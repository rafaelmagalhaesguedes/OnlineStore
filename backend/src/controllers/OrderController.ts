import { Request, Response } from 'express';
import { statusCode } from '../utils/httpStatusCodeMap';
import { OrderService } from '../services/OrderService';

/**
 * Order Controller
 * 
 * @export
 * @class OrderController
 * @extends {CrudController<IOrder>}
 */
export class OrderController {
  
  constructor(private orderService: OrderService) {}


  /**
   * Create a new order
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async createOrder(req: Request, res: Response): Promise<void> {
    const order = req.body;
    const orderItems = req.body.orderItems;

    const { status, data } = await this.orderService.createOrder(order, orderItems);

    res.status(statusCode(status)).json(data);
  }


  /**
   * Get all orders
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getOrders(_req: Request, res: Response): Promise<void> {
    const { status, data } = await this.orderService.getOrders();

    res.status(statusCode(status)).json(data);
  }


  /**
   * Get an order by id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getOrderById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const { status, data } = await this.orderService.getOrderById(id);

    res.status(statusCode(status)).json(data);
  }


  /**
   * Get all orders by customer id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getOrdersByCustomerId(req: Request, res: Response): Promise<void> {
    const customerId = Number(req.params.customerId);

    const { status, data } = await this.orderService.getOrdersByCustomerId(customerId);

    res.status(statusCode(status)).json(data);
  }


  /**
   * Get all orders by status
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getOrdersByStatus(req: Request, res: Response): Promise<void> {
    const status = req.params.status;

    const { status: responseStatus, data } = await this.orderService.getOrdersByStatus(status);

    res.status(statusCode(responseStatus)).json(data);
  }


  /**
   * Update an order
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async updateOrder(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const order = req.body;

    const { status, data } = await this.orderService.updateOrder(id, order);

    res.status(statusCode(status)).json(data);
  }


  /**
   * Delete an order
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async deleteOrder(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    const { status, data } = await this.orderService.deleteOrder(id);

    res.status(statusCode(status)).json(data);
  }
}