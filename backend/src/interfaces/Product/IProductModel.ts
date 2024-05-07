import { IProduct } from './IProduct';

export interface IProductModel {
  findAll(): Promise<IProduct[] | null>;
  /* findById(id: IProduct['id']): Promise<IProduct | null>;
  create(product: IProduct): Promise<IProduct>;
  update(id: IProduct['id'], product: IProduct): Promise<IProduct | null>;
  delete(id: IProduct['id']): Promise<boolean>; */
}