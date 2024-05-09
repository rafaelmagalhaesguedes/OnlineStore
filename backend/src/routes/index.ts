import { Router } from 'express';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';
import ProductRoutes from './ProductRoutes';
import CheckOutRoutes from './CheckOutRoutes';

/**
 * MainRoutes
 * 
 * @export
 * @class MainRoutes
 * @return {Router}
 */
export class MainRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.use('/user', UserRoutes);
    this.router.use('/auth', AuthRoutes);
    this.router.use('/product', ProductRoutes);
    this.router.use('/checkout', CheckOutRoutes);
  }
}