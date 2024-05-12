//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { OrderItem } from './OrderItem';

class Order extends Model<InferAttributes<Order>,
  InferCreationAttributes<Order>> {
  //
  declare id: CreationOptional<number>;

  declare orderDate: Date;

  declare shippedDate: Date;

  declare customerId: number;

  declare status: string;
}

Order.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'order_date',
  },
  shippedDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'shipped_date',
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'customer_id',
    references: {
      model: 'customers',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'orders',
  timestamps: false,
  underscored: true,
});

Order.hasMany(OrderItem, {
  foreignKey: 'orderId',
  as: 'items',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'orderId',
  as: 'order',
});

export { Order };