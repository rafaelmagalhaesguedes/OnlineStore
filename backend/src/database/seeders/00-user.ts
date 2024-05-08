import { QueryInterface } from 'sequelize';
import * as bcrypt from 'bcryptjs';

const SECRET_ADMIN = process.env.SECRET_ADMIN || 'admin';
const SECRET_USER = process.env.SECRET_USER || 'user';

export default {
  up: async (queryInterface: QueryInterface) => {
    const passwordAdmin = await bcrypt.hash(SECRET_ADMIN, 10);
    const passwordUser = await bcrypt.hash(SECRET_USER, 10);

    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: passwordAdmin,
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      },
      {
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: passwordUser,
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      },
      {
        username: 'User2',
        role: 'user',
        email: 'user2@user2.com',
        password: passwordUser,
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}