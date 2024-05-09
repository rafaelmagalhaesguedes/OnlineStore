import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { OrderItemModel } from '../models/OrderItemModel';
import { IOrderItem } from '../interfaces/IOrderItem';
import { OrderModel } from '../models/OrderModel';
import { IOrder } from '../interfaces/IOrder';

/**
 * Order Service
 * 
 * @export
 * @class OrderService
 * @implements {IOrderService}
 */
export class OrderService {

  /**
   * Creates an instance of OrderService.
   */
  constructor(private orderModel: OrderModel, private orderItemModel: OrderItemModel) {}


  /**
   * Create a new order
   * 
   * @param {IOrder} order
   * @param {IOrderItem[]} orderItems
   * @returns {Promise<ServiceResponse<IOrder>>}
   */
  async createOrder(order: IOrder, orderItems: IOrderItem[]): Promise<ServiceResponse<IOrder>> {

    const newOrder = await this.orderModel.create(order);

    if (!newOrder) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Order not created' } };
    }

    orderItems.forEach(async (orderItem) => {
      orderItem.orderId = newOrder.id;
      await this.orderItemModel.create(orderItem);
    });
    
    return { status: 'SUCCESSFUL', data: newOrder };
  }


  /**
   * Get all orders
   * 
   * @returns {Promise<ServiceResponse<IOrder[]>>}
   */
  async getOrders(): Promise<ServiceResponse<IOrder[]>> {

    const orders = await this.orderModel.findAll({
      include: [
      {
        association: 'items',
        as: 'items'
      }]
    });

    if (!orders) {
      return { status: 'NOT_FOUND', data: { message: 'Orders not found' } };
    }

    return { status: 'SUCCESSFUL', data: orders };
  }


  /**
   * Get an order by id
   * 
   * @param {number} id
   * @returns {Promise<ServiceResponse<IOrder>>}
   */
  async getOrderById(id: number): Promise<ServiceResponse<IOrder>> {

    const order = await this.orderModel.findById(id);

    if (!order) {
      return { status: 'NOT_FOUND', data: { message: 'Order not found' } };
    }

    return { status: 'SUCCESSFUL', data: order };
  }


  /**
   * Get orders by customer id
   * 
   * @param {number} customerId
   * @returns {Promise<ServiceResponse<IOrder[]>>}
   */
  async getOrdersByCustomerId(customerId: number): Promise<ServiceResponse<IOrder[]>> {

    const orders = await this.orderModel.findAll({ where: { customerId } });

    if (!orders) {
      return { status: 'NOT_FOUND', data: { message: 'Orders not found' } };
    }

    return { status: 'SUCCESSFUL', data: orders };
  }


  /**
   * Get orders by status
   * 
   * @param {string} status
   * @returns {Promise<ServiceResponse<IOrder[]>>}
   */
  async getOrdersByStatus(status: string): Promise<ServiceResponse<IOrder[]>> {

    const orders = await this.orderModel.findAll({ where: { status } });

    if (!orders) {
      return { status: 'NOT_FOUND', data: { message: 'Orders not found' } };
    }

    return { status: 'SUCCESSFUL', data: orders };
  }


  /**
   * Update an order
   * 
   * @param {number} userId
   * @param {IOrder} order
   * @returns {Promise<ServiceResponse<IOrder>>}
   */
  async updateOrder(userId: number, order: IOrder): Promise<ServiceResponse<IOrder>> {

    const userOrder = await this.orderModel.findOne({ where: { id: userId } });

    if (!userOrder) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized to update' } };
    }

    const updatedOrder = await this.orderModel.update(userOrder.id, order);

    if (updatedOrder === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Order not updated' } };
    }

    return { status: 'SUCCESSFUL', data: updatedOrder };
  }


  /**
   * Delete an order
   * 
   * @param {number} id
   * @returns {Promise<ServiceResponse<ServiceMessage>>}
   */
  async deleteOrder(id: number): Promise<ServiceResponse<ServiceMessage>> {
    
    const userOrder = await this.orderModel.findOne({ where: { id } });

    if (!userOrder) {
      return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized to delete' } };
    }

    const deleted = await this.orderModel.delete(id);

    if (!deleted) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Order not deleted' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Order deleted successfuly' } };
  }
}