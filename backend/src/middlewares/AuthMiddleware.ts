import { JwtService } from '../services/JwtService';
import { NextFunction, Request, Response } from 'express';
import {
  requestAuthSchema,
  requestForgotPasswordSchema,
  requestResetPasswordSchema,
} from '../middlewares/validateSchemas/authSchemas';

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
   * Validate request Auth body
   */
  static validateAuthBody(req: Request, res: Response, next: NextFunction) {
    const { error } = requestAuthSchema.validate(req.body);

    if (error) return res.status(400).json({ message: error.message });

    next();
  }


  /**
   * Validate request Forgot Password body
   */
  static validateForgotPasswordBody(req: Request, res: Response, next: NextFunction) {
    const { error } = requestForgotPasswordSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  }


  /**
   * Validate request Reset Password body
   */
  static validateResetPasswordBody(req: Request, res: Response, next: NextFunction) {
    const { error } = requestResetPasswordSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    next();
  }

}
