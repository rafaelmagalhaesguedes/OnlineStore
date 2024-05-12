import { OrderItem } from '../database/models/OrderItem';
import { IOrderItem } from '../interfaces/IOrderItem';
import { CrudRepository } from '../generics/CrudRepository';

/**
 * OrderItemModel
 * 
 * @export
 * @class OrderItemModel
 * @extends {CrudRepository<IOrderItem>}
 */
export class OrderItemModel extends CrudRepository<IOrderItem> {
  constructor() {
    super(OrderItem);
  }
}