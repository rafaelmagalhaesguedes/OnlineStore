import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      numberPhone: {
        type: DataTypes.STRING,
        field: 'number_phone',
      },
      secondaryEmail: {
        type: DataTypes.STRING,
        field: 'secondary_email',
      },
    });
  },

  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('customers');
  }
};