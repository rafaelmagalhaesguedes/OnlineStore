import { User } from '../database/models/User';
import { CrudRepository } from '../generics/CrudRepository';
import { IUser, IUserResponse } from '../interfaces/IUser';

/**
 * UserModel
 * 
 * @export
 * @class UserModel
 * @extends {CrudRepository<IUser>}
 */
export class UserModel extends CrudRepository<IUser> {
  
  constructor() {
    super(User);
  }

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await User.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }

  async updatePassword(id: IUser['id'], password: IUser['password']): Promise<IUserResponse | null> {
    const user = await User.update({ password }, { where: { id } });

    if (!user) return null;

    return await this.findById(id);
  }
}