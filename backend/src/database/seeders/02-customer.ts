import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('customers', [
      {
        user_id: 2,
        number_phone: '123456789',
        secondary_email: 'user3@user3.com',
      },
      {
        user_id: 3,
        number_phone: '123456789',
        secondary_email: 'user4@user.com',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('customers', {});
  },
}