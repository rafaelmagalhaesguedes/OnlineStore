import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Iphone 23',
        price: '500',
        price_id: 'price_1J2e2b2eZvKYlo2C',
        quantity: 10,
        image: 'https://via.placeholder.com/150',
      },
      {
        name: 'Samsung Galaxy 30',
        price: '400',
        price_id: 'price_1J2e2b2eZvKYlo2D',
        quantity: 15,
        image: 'https://via.placeholder.com/150',
      },
      {
        name: 'Xiaomi Redmi 10',
        price: '300',
        price_id: 'price_1J2e2b2eZvKYlo2E',
        quantity: 20,
        image: 'https://via.placeholder.com/150',
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}