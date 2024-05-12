import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { Address } from './Address';
import { Order } from './Order';

class Customer extends Model<InferAttributes<Customer>,
InferCreationAttributes<Customer>> {
  //
  declare id: CreationOptional<number>;

  declare userId: number;

  declare numberPhone: string;

  declare secondaryEmail: string;
}

Customer.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
}, {
  sequelize: db,
  modelName: 'customers',
  timestamps: false,
  underscored: true,
});


Customer.hasMany(Address, {
  foreignKey: 'customerId',
  as: 'addresses',
});

Address.belongsTo(Customer, {
  foreignKey: 'customerId',
  as: 'customer',
});

Customer.hasMany(Order, {
  foreignKey: 'customerId',
  as: 'orders',
});

Order.belongsTo(Customer, {
  foreignKey: 'customerId',
  as: 'customer',
});

export { Customer };