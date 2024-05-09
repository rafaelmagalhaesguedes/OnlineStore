import { SequelizeUser } from '../database/models/SequelizeUser';
import { CrudRepository } from '../generics/CrudRepository';
import { IUser } from '../interfaces/IUser';

export class UserModel extends CrudRepository<IUser> {
  constructor() {
    super(SequelizeUser);
  }
}