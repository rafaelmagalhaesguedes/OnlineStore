import { SendEmailResetPassword } from '../utils/SendEmailResetPassword';
import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { IToken, IUser, IUserRole } from '../interfaces/IUser';
import { UserModel } from '../models/UserModel';
import { JwtService } from './JwtService';
import * as bcrypt from 'bcryptjs';

/**
 * Auth Service
 * 
 * @export
 * @class AuthService
 * @param {UserModel} userModel
 * @returns {AuthService}
 */
export class AuthService {

  /**
   * Creates an instance of AuthService.
   */
  constructor(private userModel: UserModel) {}


  /**
   * Authenticate a user
   * 
   * @param {string} email
   * @param {string} password
   * @returns {Promise<ServiceResponse<IToken>>}
   */
  async authenticate(email: string, password: string): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.findByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = JwtService.createToken({ id: user.id, email: user.email });

    if (!token) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error creating token' } };
    }

    return { status: 'SUCCESSFUL', data: { token } };
  }


  /**
   * Get user role
   * 
   * @param {IUser['email']} email
   * @returns {Promise<ServiceResponse<IUserRole>>}
   */
  async getUserRole(email: IUser['email']): Promise<ServiceResponse<IUserRole>> {
    const user = await this.userModel.findByEmail(email);

    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    return { status: 'SUCCESSFUL', data: { role: user.role } };
  }


  /**
   * Forgot password
   * 
   * @param {IUser['email']} email
   * @returns {Promise<ServiceResponse<ServiceMessage>>}
   */
  async forgotPassword(email: IUser['email']): Promise<ServiceResponse<ServiceMessage>> {
    const user = await this.userModel.findByEmail(email);

    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const token = JwtService.createResetPasswordToken({ id: user.id });

    if (!token) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error creating token' } };
    }

    await SendEmailResetPassword(email, token);

    return { status: 'SUCCESSFUL', data: { message: 'Password reset link sent to email' } };
  }


  /**
   * Reset password
   * 
   * @param {string} token
   * @param {string} password
   * @returns {Promise<ServiceResponse<ServiceMessage>>}
   */
  async resetPassword(token: string, password: string): Promise<ServiceResponse<ServiceMessage>> {
    const decoded = JwtService.verifyToken(token);

    if (!decoded) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid token' } };
    }

    const user = await this.userModel.findById(decoded.id);

    if (!user) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updated = await this.userModel.updatePassword(user.id, hashedPassword);

    if (!updated) {
      return { status: 'INTERNAL_ERROR', data: { message: 'Error updating password, try again!' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Password updated successfully' } };
  }

}