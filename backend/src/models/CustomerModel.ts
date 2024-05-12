import { Customer } from '../database/models/Customer';
import { ICustomer } from '../interfaces/ICustomer';
import { CrudRepository } from '../generics/CrudRepository';

/**
 * CustomerModel
 * 
 * @export
 * @class CustomerModel
 * @extends {CrudRepository<ICustomer>}
 */
export class CustomerModel extends CrudRepository<ICustomer> {
  constructor() {
    super(Customer);
  }
}