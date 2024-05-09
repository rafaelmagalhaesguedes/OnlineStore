import { SequelizeUser } from '../database/models/SequelizeUser';
import { CrudRepository } from '../generics/CrudRepository';
import { IUser, IUserResponse } from '../interfaces/IUser';

export class UserModel extends CrudRepository<IUser> {
  constructor() {
    super(SequelizeUser);
  }

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    const user = await SequelizeUser.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }

  async updatePassword(id: IUser['id'], password: IUser['password']): Promise<IUserResponse | null> {
    const user = await SequelizeUser.update({ password }, { where: { id } });

    if (!user) return null;

    return await this.findById(id);
  }
}