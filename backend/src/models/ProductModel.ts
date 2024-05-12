import { Product } from '../database/models/Product';
import { IProduct } from '../interfaces/IProduct';
import { CrudRepository } from '../generics/CrudRepository';

/**
 * ProductModel
 * 
 * @export
 * @class ProductModel
 * @extends {CrudRepository<IProduct>}
 */
export class ProductModel extends CrudRepository<IProduct> {
  constructor() {
    super(Product);
  }
}