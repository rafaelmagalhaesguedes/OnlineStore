import { JwtService } from '../services/JwtService';
import { NextFunction, Request, Response } from 'express';
import { requestBodySchema } from '../middlewares/validateSchemas/authSchemas';

/**
 * Auth Middleware
 * 
 * @export
 * @class AuthMiddleware
 */
export class AuthMiddleware {
  
  /**
   * Validate token
   */
  static validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const token = JwtService.splitToken(authorization);
      const payload = JwtService.verifyToken(token);
      res.locals.user = payload;
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  }


  /**
   * Validate request body
   */
  static validateRequestBody(req: Request, res: Response, next: NextFunction) {
    const { error } = requestBodySchema.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    next();
  }

}
