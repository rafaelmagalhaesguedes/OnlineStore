import { UserModel } from '../models/UserModel';
import { Request, Router, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { AuthController } from '../controllers/AuthController';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';

/**
 * AuthRoutes
 * 
 * @export
 * @class AuthRoutes
  */
export class AuthRoutes {
  public router: Router;
  private authController: AuthController;

  constructor(authController: AuthController) {
    this.router = Router();
    this.authController = authController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      '/',
      AuthMiddleware.validateRequestBody,
      (req: Request, res: Response) => this.authController.authenticate(req, res),
    );

    this.router.get(
      '/role',
      AuthMiddleware.validateToken,
      (req: Request, res: Response) => this.authController.getUserRole(req, res),
    );
  }
}

/* 
  Export an instance of AuthRoutes
*/
const userModel = new UserModel();
const authService = new AuthService(userModel);
const authController = new AuthController(authService);
const authRoutes = new AuthRoutes(authController);

export default authRoutes.router;


