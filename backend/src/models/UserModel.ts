import { SequelizeUser } from '../database/models/SequelizeUser';
import { CrudRepository } from '../generics/CrudRepository';
import { IUser } from '../interfaces/IUser';

export class UserModel extends CrudRepository<IUser> {
  constructor() {
    super(SequelizeUser);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await SequelizeUser.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }
}