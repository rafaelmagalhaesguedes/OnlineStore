import { Request, Router, Response } from 'express';
import { ProductModel } from '../models/ProductModel';
import { ProductService } from '../services/ProductService';
import { ProductController } from '../controllers/ProductController';
import { ProductMiddleware } from '../middlewares/ProductMiddleware';

/**
 * ProductRoutes
 * 
 * @export
 * @class ProductRoutes
 */
class ProductRoutes {
  public router: Router; // Express router
  private productController: ProductController; // Product controller

  /**
   * Creates an instance of ProductRoutes.
   */
  constructor(productController: ProductController) {
    this.router = Router(); // Initialize Express router
    this.productController = productController;  // Initialize product controller
    this.initializeRoutes(); // Initialize routes
  }

  /**
   * Initialize routes
   */
  private initializeRoutes() {
    this.router.get(
      '/',
      (req: Request, res: Response) => this.productController.getProducts(req, res),
    );

    this.router.get(
      '/:id',
      (req: Request, res: Response) => this.productController.getProductById(req, res),
    );

    this.router.post(
      '/',
      ProductMiddleware.validateRequestBody,
      (req: Request, res: Response) => this.productController.createProduct(req, res),
    );

    this.router.put(
      '/:id',
      (req: Request, res: Response) => this.productController.updateProduct(req, res),
    );

    this.router.delete(
      '/:id',
      (req: Request, res: Response) => this.productController.deleteProduct(req, res),
    );
  }
}

/**
 * Export an instance of ProductRoutes
 */
const productModel = new ProductModel();
const productService = new ProductService(productModel);
const productController = new ProductController(productService);
const productRoutes = new ProductRoutes(productController);

export default productRoutes.router;