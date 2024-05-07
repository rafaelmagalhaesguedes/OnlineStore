import { Request, Router, Response } from 'express';
import { ProductModel } from '../models/ProductModel';
import { ProductService } from '../services/ProductService';
import { ProductController } from '../controllers/ProductController';

class ProductRoutes {
  public router: Router;
  private endpoint: ProductController;

  constructor(productController: ProductController) {
    this.router = Router();
    this.endpoint = productController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      '/',
      (req: Request, res: Response) => this.endpoint.getProducts(req, res),
    );
  }
}

const productModel = new ProductModel();
const productService = new ProductService(productModel);
const productController = new ProductController(productService);
const productRoutes = new ProductRoutes(productController);

export default productRoutes.router;