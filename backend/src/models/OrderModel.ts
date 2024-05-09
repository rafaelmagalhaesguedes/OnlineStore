import { IOrder } from '../interfaces/IOrder';
import { CrudRepository } from '../generics/CrudRepository';
import { SequelizeOrder } from '../database/models/SequelizeOrder';

/**
 * OrderModel
 * 
 * @export
 * @class OrderModel
 * @extends {CrudRepository<IOrder>}
 */
export class OrderModel extends CrudRepository<IOrder> {
  constructor() {
    super(SequelizeOrder);
  }
}