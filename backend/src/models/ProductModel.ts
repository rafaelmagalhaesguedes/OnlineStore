import { SequelizeProduct } from '../database/models/SequelizeProduct';
import { CrudRepository } from '../generics/CrudRepository';
import { IProduct } from '../interfaces/Product/IProduct';

export class ProductModel extends CrudRepository<IProduct> {
  constructor() {
    super(SequelizeProduct);
  }
}