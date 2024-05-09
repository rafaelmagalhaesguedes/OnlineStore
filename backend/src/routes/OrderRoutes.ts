import { Request, Router, Response } from 'express';
import { OrderModel } from '../models/OrderModel';
import { OrderService } from '../services/OrderService';
import { OrderItemModel } from '../models/OrderItemModel';
import { OrderController } from '../controllers/OrderController';

/**
 * Order Routes
 * 
 * @export
 * @class OrderRoutes
 */
class OrderRoutes {
  public router: Router; // Express router
  private orderController: OrderController; // Product controller

  /**
   * Creates an instance of ProductRoutes.
   */
  constructor(orderController: OrderController) {
    this.router = Router(); // Initialize Express router
    this.orderController = orderController;  // Initialize product controller
    this.initializeRoutes(); // Initialize routes
  }

  /**
   * Initialize routes
   */
  private initializeRoutes() {
    this.router.get(
      '/',
      (req: Request, res: Response) => this.orderController.getOrders(req, res),
    );

    this.router.post(
      '/',
      (req: Request, res: Response) => this.orderController.createOrder(req, res),
    );

    this.router.get(
      '/:id',
      (req: Request, res: Response) => this.orderController.getOrderById(req, res),
    );

    this.router.get(
      '/customer/:id',
      (req: Request, res: Response) => this.orderController.getOrdersByCustomerId(req, res),
    );

    this.router.get(
      '/status/:status',
      (req: Request, res: Response) => this.orderController.getOrdersByStatus(req, res),
    );

    this.router.put(
      '/:id',
      (req: Request, res: Response) => this.orderController.updateOrder(req, res),
    );

    this.router.delete(
      '/:id',
      (req: Request, res: Response) => this.orderController.deleteOrder(req, res),
    );
  }
}

/**
 * Export an instance of OrderRoutes
 */
const orderModel = new OrderModel();
const orderItemModel = new OrderItemModel();
const orderService = new OrderService(orderModel, orderItemModel);
const orderController = new OrderController(orderService);

const orderRoutes = new OrderRoutes(orderController);

export default orderRoutes.router;