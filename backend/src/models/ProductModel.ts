import { SequelizeProduct } from '../database/models/SequelizeProduct';
import { CrudRepository } from '../generics/CrudRepository';
import { IProduct } from '../interfaces/IProduct';

export class ProductModel extends CrudRepository<IProduct> {
  constructor() {
    super(SequelizeProduct);
  }
}