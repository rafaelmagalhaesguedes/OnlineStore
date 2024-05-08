import { Router } from 'express';
import CheckOutRoutes from './CheckOutRoutes';
import ProductRoutes from './ProductRoutes';

class MainRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.use('/product', ProductRoutes);
    this.router.use('/checkout', CheckOutRoutes);
  }
}

export { MainRoutes };