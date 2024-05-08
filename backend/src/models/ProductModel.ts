import { SequelizeProduct } from '../database/models/SequelizeProduct';
import { IProductModel } from '../interfaces/Product/IProductModel';
import { IProduct } from '../interfaces/Product/IProduct';

/**
 * ProductModel
 * 
 * @export
 * @class ProductModel
 * @implements {IProductModel}
 */
export class ProductModel implements IProductModel {
  
  /**
   * Creates an instance of ProductModel.
   */
  constructor(private readonly productModel = SequelizeProduct) { }

  /**
   * Find all products
   * 
   * @returns {Promise<IProduct[] | null>}
   * @memberof ProductModel
   * @implements {IProductModel}
   */
  async findAll(): Promise<IProduct[] | null> {
    const products = await this.productModel.findAll();

    if (!products) return null;

    const productsData = products.map((product) => {
      const { id, name, price, priceId, quantity, image } = product;
      return { id, name, price, priceId, quantity, image };
    });

    return productsData;
  }


  /**
   * Find a product by id
   * 
   * @param {IProduct['id']} id
   * @returns {Promise<IProduct | null>}
   * @memberof ProductModel
   * @implements {IProductModel}
   */
  async findById(id: IProduct['id']): Promise<IProduct | null> {
    const product = await this.productModel.findOne({ where: { id } });

    if (!product) return null;

    const { name, price, priceId, quantity, image } = product;
    
    return { id, name, price, priceId, quantity, image };
  }

  /**
   * Create a new product
   * 
   * @param {IProduct} product
   * @returns {Promise<IProduct | null>}
   * @memberof ProductModel
   * @implements {IProductModel}
   */
  async create(product: IProduct): Promise<IProduct | null> {
    const newProduct = await this.productModel.create(product);

    if (newProduct === null) return null;

    const { id, name, price, priceId, quantity, image } = newProduct;

    return { id, name, price, priceId, quantity, image };
  }

  /**
   * Update a product by id
   * 
   * @param {IProduct['id']} id
   * @param {IProduct} product
   * @returns {Promise<IProduct | null>}
   * @memberof ProductModel
   * @implements {IProductModel}
   */
  async update(id: IProduct['id'], product: IProduct): Promise<IProduct | null> {
    const [updatedRows] = await this.productModel.update(product, { where: { id } });

    if (updatedRows === 0) return null;

    const updatedProduct = await this.productModel.findByPk(id);
    const { name, price, priceId, quantity, image } = updatedProduct as IProduct;

    return { id, name, price, priceId, quantity, image };
  }

  /**
   * Delete a product by id
   * 
   * @param {IProduct['id']} id
   * @returns {Promise<boolean>}
   * @memberof ProductModel
   * @implements {IProductModel}
   */
  async delete(id: IProduct['id']): Promise<boolean> {
    const deletedRows = await this.productModel.destroy({ where: { id } });

    return !!deletedRows;
  }
}