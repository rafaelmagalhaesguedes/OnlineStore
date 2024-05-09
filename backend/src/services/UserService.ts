import { ServiceMessage, ServiceResponse } from '../interfaces/ServiceResponse';
import { UserModel } from '../models/UserModel';
import { IUser, IUserResponse } from '../interfaces/IUser';

/**
 * User Service
 * 
 * @export
 * @class UserService
 * @param {UserModel} userModel
 */
export class UserService {

  /**
   * Creates an instance of UserService.
   */
  constructor(private userModel: UserModel) {}

  
  /**
   * Get all users
   * 
   * @returns {Promise<ServiceResponse<IUserResponse[]>>}
   * @memberof UserService
   */
  async getUsers(): Promise<ServiceResponse<IUserResponse[]>> {
    const users = await this.userModel.findAll();

    if (users === null) {
      return { status: 'NOT_FOUND', data: { message: 'Users not found' } };
    }

    const usersWithoutPassword = users.map((user: IUser) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return { status: 'SUCCESSFUL', data: usersWithoutPassword };
  }


  /**
   * Get a user by id
   * 
   * @param {IUser['id']} id
   * @returns {Promise<ServiceResponse<IUserResponse>>}
   * @memberof UserService
   */
  async getUserById(id: IUser['id']): Promise<ServiceResponse<IUserResponse>> {
    const user = await this.userModel.findById(id);

    if (user === null) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const { password, ...userWithoutPassword } = user;

    return { status: 'SUCCESSFUL', data: userWithoutPassword };
  }


  /**
   * Create a new user
   * 
   * @param {IUser} user
   * @returns {Promise<ServiceResponse<IUserResponse>>}
   * @memberof UserService
   */
  async createUser(user: IUser): Promise<ServiceResponse<IUserResponse>> {
    const userExists = await this.userModel.findByEmail(user.email);

    if (userExists) {
      return { status: 'CONFLICT', data: { message: 'User already exists' } };
    }

    const newUser = await this.userModel.create(user);

    if (newUser === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not created, try again!' } };
    }

    const { password, ...userWithoutPassword } = newUser;

    return { status: 'CREATED', data: userWithoutPassword };
  }


  /**
   * Update a user
   * 
   * @param {IUser['id']} id
   * @param {IUser} user
   * @returns {Promise<ServiceResponse<IUser>>}
   * @memberof UserService
   */
  async updateUser(id: number, user: IUser): Promise<ServiceResponse<IUserResponse>> {
    const userExists = await this.userModel.findById(id);

    if (!userExists) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const updatedUser = await this.userModel.update(id, user);

    if (updatedUser === null) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not updated, try again!' } };
    }

    const { password, ...userWithoutPassword } = updatedUser;

    return { status: 'SUCCESSFUL', data: userWithoutPassword };
  }


  /**
   * Delete a user
   * 
   * @param {IUser['id']} id
   * @returns {Promise<ServiceResponse<boolean>>}
   * @memberof UserService
   */
  async deleteUser(id: IUser['id']): Promise<ServiceResponse<ServiceMessage>> {
    const userExists = await this.userModel.findById(id);

    if (!userExists) {
      return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    }

    const deleted = await this.userModel.delete(id);

    if (!deleted) {
      return { status: 'INTERNAL_ERROR', data: { message: 'User not deleted, try again!' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'User deleted successfuly' } };
  }
}