import { SequelizeProduct } from '../database/models/SequelizeProduct';
import { CrudRepository } from '../generics/CrudRepository';
import { IProduct } from '../interfaces/IProduct';

/**
 * ProductModel
 * 
 * @export
 * @class ProductModel
 * @extends {CrudRepository<IProduct>}
 */
export class ProductModel extends CrudRepository<IProduct> {
  constructor() {
    super(SequelizeProduct);
  }
}