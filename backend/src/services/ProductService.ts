import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IProduct } from '../interfaces/IProduct';
import { ProductModel } from '../models/ProductModel';

/**
 * ProductService
 * 
 * @export
 * @class ProductService
 * @param {ProductModel} productModel
 */
export class ProductService {

  /**
   * Creates an instance of ProductService.
   */
  constructor(private productModel: ProductModel) {}


  /**
   * Get all products
   * 
   * @returns {Promise<ServiceResponse<IProduct[]>>}
   * @memberof ProductService
   */
  async getProducts(): Promise<ServiceResponse<IProduct[]>> {
    const products = await this.productModel.findAll();

    if (products === null) {
      return { status: 'NOT_FOUND', data: { message: 'Products not found' } };
    }

    return { status: 'SUCCESSFUL', data: products };
  }


  /**
   * Get a product by id
   * 
   * @param {IProduct['id']} id
   * @returns {Promise<ServiceResponse<IProduct>>}
   * @memberof ProductService
   */
  async getProductById(id: IProduct['id']): Promise<ServiceResponse<IProduct>> {
    const product = await this.productModel.findById(id);

    if (product === null) {
      return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }

    return { status: 'SUCCESSFUL', data: product };
  }


  /**
   * Create a new product
   * 
   * @param {IProduct} product
   * @returns {Promise<ServiceResponse<IProduct>>}
   * @memberof ProductService
   */
  async createProduct(product: IProduct): Promise<ServiceResponse<IProduct>> {
    const productExists = await this.productModel.findById(product.id);

    if (productExists) {
      return { status: 'NOT_FOUND', data: { message: 'Product already exists' } };
    }

    const newProduct = await this.productModel.create(product);

    if (newProduct === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Failed to create product' } };
    }

    return { status: 'CREATED', data: newProduct };
  }


  /**
   * Update a product
   * 
   * @param {IProduct['id']} id
   * @param {IProduct} product
   * @returns {Promise<ServiceResponse<IProduct>>}
   * @memberof ProductService
   */
  async updateProduct(id: IProduct['id'], product: IProduct): Promise<ServiceResponse<IProduct>> {
    const productExists = await this.productModel.findById(id);

    if (!productExists) {
      return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }

    const updatedProduct = await this.productModel.update(id, product);

    if (updatedProduct === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Failed to update product' } };
    }

    return { status: 'SUCCESSFUL', data: updatedProduct };
  }


  /**
   * Delete a product
   * 
   * @param {IProduct['id']} id
   * @returns {Promise<ServiceResponse<boolean>>}
   * @memberof ProductService
   */
  async deleteProduct(id: IProduct['id']): Promise<ServiceResponse<boolean>> {
    const productExists = await this.productModel.findById(id);

    if (!productExists) {
      return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
    }

    const deleted = await this.productModel.delete(id);

    if (!deleted) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Failed to delete product' } };
    }

    return { status: 'SUCCESSFUL', data: true };
  }
  
}