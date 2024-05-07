import { Request, Router, Response } from 'express';
import { CheckOutService } from '../services/CheckOutService';
import { CheckOutController } from '../controllers/CheckOutController';

class CheckOutRoutes {
  public router: Router;
  private checkoutController: CheckOutController;

  constructor(checkoutController: CheckOutController) {
    this.router = Router();
    this.checkoutController = checkoutController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      '/',
      (req: Request, res: Response) => this.checkoutController.createStripeSession(req, res),
    );
  }
}

const checkoutService = new CheckOutService();
const checkoutController = new CheckOutController(checkoutService);
const checkoutRoutes = new CheckOutRoutes(checkoutController);

export default checkoutRoutes.router;