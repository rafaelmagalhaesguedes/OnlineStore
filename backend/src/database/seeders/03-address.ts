import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('addresses', [
      {
        customer_id: 1,
        street: '101 Admin St',
        number_house: '101',
        neighborhood: 'Admin Neighborhood',
        city: 'Admin City',
        state: 'Admin State',
        country: 'Admin Country',
        zip: '12345',
      },
      {
        customer_id: 2,
        street: '500 User St',
        number_house: '500',
        neighborhood: 'User Neighborhood',
        city: 'User City',
        state: 'User State',
        country: 'User Country',
        zip: '54321',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('addresses', {});
  },
}