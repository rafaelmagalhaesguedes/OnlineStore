import { IOrderItem } from '../interfaces/IOrderItem';
import { CrudRepository } from '../generics/CrudRepository';
import { SequelizeOrderItem } from '../database/models/SequelizeOrderItem';

/**
 * OrderItemModel
 * 
 * @export
 * @class OrderItemModel
 * @extends {CrudRepository<IOrderItem>}
 */
export class OrderItemModel extends CrudRepository<IOrderItem> {
  constructor() {
    super(SequelizeOrderItem);
  }
}