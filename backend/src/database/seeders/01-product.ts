import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'iPhone 14',
        brand: 'Apple',
        price: '999.99',
        price_id: 'price_1PDRSIGl8SYs9Zeb0Cd0FeTI',
        description: 'O iPhone 14 é o mais novo lançamento da Apple, com um design inovador e câmeras de alta qualidade.',
        quantity: 10,
        image: 'https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022-O.webp',
      },
      {
        name: 'Galaxy A54',
        brand: 'Samsung',
        price: '699.99',
        price_id: 'price_1PDR05Gl8SYs9ZebgUTbavi3',
        description: 'O Galaxy A54 é um smartphone intermediário com câmeras de alta qualidade e um design moderno.',
        quantity: 15,
        image: 'https://http2.mlstatic.com/D_NQ_NP_764911-MLA70635682917_072023-O.webp',
      },
      {
        name: 'Xiaomi Redmi 12',
        brand: 'Xiaomi',
        price: '399.99',
        price_id: 'price_1PDR0VGl8SYs9Zeb8njkL6BL',
        description: 'O Xiaomi Redmi 12 é um smartphone com um ótimo custo-benefício e câmeras de alta qualidade.',
        quantity: 20,
        image: 'https://http2.mlstatic.com/D_NQ_NP_778864-MLA70971122056_082023-O.webp',
      },/* 
      {
        name: 'Galaxy A15',
        brand: 'Samsung',
        price: '199.99',
        price_id: 'price_1PDR0vGl8SYs9ZebBb4V4q3h',
        description: 'O Galaxy A15 é um smartphone com um ótimo custo-benefício e câmeras de alta qualidade.',
        quantity: 30,
        image: 'https://http2.mlstatic.com/D_NQ_NP_682320-MLA75752148489_042024-O.webp',
      },
      {
        name: 'Galaxy A24',
        brand: 'Samsung',
        price: '799.99',
        price_id: 'price_1PDR1AGl8SYs9Zeb3q3V5U2l',
        description: 'O Galaxy A24 é um smartphone com um ótimo custo-benefício e câmeras de alta qualidade.',
        quantity: 35,
        image: 'https://http2.mlstatic.com/D_NQ_NP_903292-MLA74808092653_022024-O.webp',
      },
      {
        name: 'Galaxy A55',
        brand: 'Samsung',
        price: '899.99',
        price_id: 'price_1PDR1SGl8SYs9ZebVl2Bv7cF',
        description: 'O Galaxy A55 é um smartphone com um ótimo custo-benefício e câmeras de alta qualidade.',
        quantity: 40,
        image: 'https://http2.mlstatic.com/D_NQ_NP_828557-MLA75148190826_032024-O.webp',
      },
      {
        name: 'iPhone 13',
        brand: 'Apple',
        price: '1299.99',
        price_id: 'price_1PDR1mGl8SYs9ZebQf1Jb2eB',
        description: 'O iPhone 13 é o mais novo lançamento da Apple, com um design inovador e câmeras de alta qualidade.',
        quantity: 45,
        image: 'https://http2.mlstatic.com/D_NQ_NP_640758-MLA47782243628_102021-O.webp',
      },
      {
        name: 'iPhone 14',
        brand: 'Apple',
        price: '749.99',
        price_id: 'price_1PDR2AGl8SYs9Zeb2U4Yv5vV',
        description: 'O iPhone 14 é o mais novo lançamento da Apple, com um design inovador e câmeras de alta qualidade.',
        quantity: 50,
        image: 'https://http2.mlstatic.com/D_NQ_NP_766596-MLA74805959311_022024-O.webp',
      }, */
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('products', {});
  },
}