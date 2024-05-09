import { Request, Router, Response } from 'express';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/UserService';
import { UserController } from '../controllers/UserController';

/**
 * UserRoutes
 * 
 * @export
 * @class UserRoutes
 */
class UserRoutes {
  public router: Router;
  private userController: UserController;

  /**
   * Creates an instance of UserRoutes.
   */
  constructor(userController: UserController) {
    this.router = Router();
    this.userController = userController;
    this.initializeRoutes();
  }

  /**
   * Initialize routes
   */
  private initializeRoutes() {
    this.router.get(
      '/',
      (req: Request, res: Response) => this.userController.getUsers(req, res),
    );

    this.router.get(
      '/:id',
      (req: Request, res: Response) => this.userController.getUserById(req, res),
    );

    this.router.post(
      '/',
      (req: Request, res: Response) => this.userController.createUser(req, res),
    );

    this.router.put(
      '/:id',
      (req: Request, res: Response) => this.userController.updateUser(req, res),
    );

    this.router.delete(
      '/:id',
      (req: Request, res: Response) => this.userController.deleteUser(req, res),
    );
  }
}

/* 
  Export an instance of UserRoutes
*/
const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);
const userRoutes = new UserRoutes(userController);

export default userRoutes.router;