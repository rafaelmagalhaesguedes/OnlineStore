import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'order_id',
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'product_id',
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'total_price',
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('items');
  }
};