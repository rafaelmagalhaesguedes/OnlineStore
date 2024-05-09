import { Router } from 'express';
import { CustomerModel } from '../models/CustomerModel';
import { CustomerService } from '../services/CustomerService';
import { CustomerController } from '../controllers/CustomerController';

/**
 * CustomerRoutes
 * 
 * @export
 * @class CustomerRoutes
 * @extends {Router}
 */
export class CustomerRoutes {
  public router: Router;
  private customerController: CustomerController;

  constructor(customerController: CustomerController) {
    this.router = Router();
    this.customerController = customerController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
    this.router.get(
      '/',
      (req, res) => this.customerController.getCustomers(req, res),
    );

    this.router.post(
      '/',
      (req, res) => this.customerController.createCustomer(req, res),
    );

    this.router.get(
      '/:id',
      (req, res) => this.customerController.findCustomerById(req, res),
    );

    this.router.get(
      '/user/:userId',
      (req, res) => this.customerController.findCustomerByUserId(req, res),
    );

    this.router.put(
      '/:id',
      (req, res) => this.customerController.updateCustomer(req, res),
    );

    this.router.delete(
      '/:id',
      (req, res) => this.customerController.deleteCustomer(req, res),
    );
  }
}

/* 
  Export an instance of CustomerRoutes
*/
const customerModel = new CustomerModel();
const customerService = new CustomerService(customerModel);
const customerController = new CustomerController(customerService);
const customerRoutes = new CustomerRoutes(customerController);

export default customerRoutes.router;