import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('order_items', [
      {
        order_id: 1,
        product_id: 2,
        quantity: 1,
        price: 999.99,
        total_price: 999.99,
      },
      {
        order_id: 2,
        product_id: 3,
        quantity: 1,
        price: 999.99,
        total_price: 999.99,
      },
      {
        order_id: 3,
        product_id: 4,
        quantity: 1,
        price: 999.99,
        total_price: 999.99,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('order_items', {});
  },
}