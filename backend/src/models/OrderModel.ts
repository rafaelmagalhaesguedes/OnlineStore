import { Order } from '../database/models/Order';
import { IOrder } from '../interfaces/IOrder';
import { CrudRepository } from '../generics/CrudRepository';

/**
 * OrderModel
 * 
 * @export
 * @class OrderModel
 * @extends {CrudRepository<IOrder>}
 */
export class OrderModel extends CrudRepository<IOrder> {
  constructor() {
    super(Order);
  }
}