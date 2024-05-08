import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('orders', [
      {
        order_date: '2023-12-14',
        shipped_date: '2021-09-20',
        customer_id: '1',
        status: 'Shipped',
      },
      {
        order_date: '2023-12-15',
        shipped_date: '2021-09-21',
        customer_id: '2',
        status: 'Shipped',
      },
      {
        order_date: '2023-12-16',
        shipped_date: '2021-09-22',
        customer_id: '3',
        status: 'Cancelled',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('orders', {});
  },
}