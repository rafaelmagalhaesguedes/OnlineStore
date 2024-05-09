import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {

    await queryInterface.bulkInsert('users', [
      {
        username: 'Admin',
        role: 'admin',
        email: 'admin@admin.com',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
        image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      },
      {
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: 'secretuser',
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      },
      {
        username: 'User2',
        role: 'user',
        email: 'user2@user2.com',
        password: 'secretuser',
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}