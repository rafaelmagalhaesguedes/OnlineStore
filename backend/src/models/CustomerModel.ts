import { ICustomer } from '../interfaces/ICustomer';
import { CrudRepository } from '../generics/CrudRepository';
import { SequelizeCustomer } from '../database/models/SequelizeCustomer';

/**
 * CustomerModel
 * 
 * @export
 * @class CustomerModel
 * @extends {CrudRepository<ICustomer>}
 */
export class CustomerModel extends CrudRepository<ICustomer> {
  constructor() {
    super(SequelizeCustomer);
  }
}