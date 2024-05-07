import { IProductModel } from '../interfaces/Product/IProductModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IProduct } from '../interfaces/Product/IProduct';

export class ProductService {

  constructor(private productModel: IProductModel) {}

  async getProducts(): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.findAll();

    if (products === null) {
      return { status: 'NOT_FOUND', data: { message: 'Products not found' } };
    }

    return { status: 'SUCCESSFUL', data: products };
  }
  
}