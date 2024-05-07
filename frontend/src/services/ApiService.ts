import axios, { AxiosInstance } from 'axios';
import { ProductType } from '../types/ProductType';

class ProductService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3001',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getProducts() {
    try {
      const response = await this.api.get('/product');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch products', error);
      return [];
    }
  }

  async checkout(items: ProductType[]) {
    try {
      const response = await this.api.post('/checkout', { items });
      return response.data;
    } catch (error) {
      console.error('Failed to checkout', error);
      return { url: '' };
    }
  }
}

const productService = new ProductService();

export default productService;