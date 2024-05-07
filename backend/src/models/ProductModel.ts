import { SequelizeProduct } from '../database/models/SequelizeProduct';
import { IProductModel } from '../interfaces/Product/IProductModel';
import { IProduct } from '../interfaces/Product/IProduct';

export class ProductModel implements IProductModel {
  
  constructor(private readonly productModel = SequelizeProduct) { }

  async findAll(): Promise<IProduct[] | null> {
    const products = await this.productModel.findAll();

    if (!products) return null;

    const productsData = products.map((product) => {
      const { id, name, price, priceId, quantity, image } = product;
      return { id, name, price, priceId, quantity, image };
    });

    return productsData;
  }
}