import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { statusCode } from '../utils/httpStatusCodeMap';

/**
 * User Controller
 * 
 * @export
 * @class UserController
 * @param {UserService} userService
 */
export class UserController {
  
  /**
   * Creates an instance of UserController.
   */
  constructor(private userService: UserService) {}


  /**
   * Get all users
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async getUsers(_req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.userService.getUsers();
    
    return res.status(statusCode(status)).json(data);
  }


  /**
   * Get a user by id
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.userService.getUserById(+id);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Create a new user
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async createUser(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.userService.createUser(req.body);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Update a user
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.userService.updateUser(+id, req.body);

    return res.status(statusCode(status)).json(data);
  }
  

  /**
   * Delete a user
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { status, data } = await this.userService.deleteUser(+id);

    return res.status(statusCode(status)).json(data);
  }

}