import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { statusCode } from '../utils/httpStatusCodeMap';


export class AuthController {
  constructor(private authService: AuthService) {}


  /**
   * Authenticate a user
   * 
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { status, data } = await this.authService.authenticate(email, password);

    return res.status(statusCode(status)).json(data);
  }


  /**
   * Get user role
   * 
   * @param {Request} _req
   * @param {Response} res
   * @returns {Promise<Response>}
   */
  async getUserRole(_req: Request, res: Response): Promise<Response> {
    const { email } = res.locals.user;

    const { status, data } = await this.authService.getUserRole(email);

    return res.status(statusCode(status)).json(data);
  }

}