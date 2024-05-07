import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'iPhone 14',
        price: '999.99',
        price_id: 'price_1PDRSIGl8SYs9Zeb0Cd0FeTI',
        quantity: 10,
        image: 'https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022-O.webp',
      },
      {
        name: 'Samsung Galaxy A54',
        price: '699.99',
        price_id: 'price_1PDR05Gl8SYs9ZebgUTbavi3',
        quantity: 15,
        image: 'https://http2.mlstatic.com/D_NQ_NP_764911-MLA70635682917_072023-O.webp',
      },
      {
        name: 'Xiaomi Redmi 12',
        price: '399.99',
        price_id: 'price_1PDR0VGl8SYs9Zeb8njkL6BL',
        quantity: 20,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}