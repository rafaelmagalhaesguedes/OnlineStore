import { Router } from 'express';
import UserRoutes from './UserRoutes';
import AuthRoutes from './AuthRoutes';
import OrderRoutes from './OrderRoutes';
import ProductRoutes from './ProductRoutes';
import CustomerRoutes from './CustomerRoutes';
import PaymentRoutes from './PaymentRoutes';

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
    this.router.use('/order', OrderRoutes);
    this.router.use('/product', ProductRoutes);
    this.router.use('/customer', CustomerRoutes);
    this.router.use('/payment', PaymentRoutes);
  }
}