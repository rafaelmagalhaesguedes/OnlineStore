//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { SequelizeOrderItem } from './SequelizeOrderItem';

class SequelizeOrder extends Model<InferAttributes<SequelizeOrder>,
  InferCreationAttributes<SequelizeOrder>> {
  //
  declare id: CreationOptional<number>;

  declare orderDate: Date;

  declare shippedDate: Date;

  declare customerId: number;

  declare status: string;
}

SequelizeOrder.init({
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

SequelizeOrder.hasMany(SequelizeOrderItem, {
  foreignKey: 'orderId',
  as: 'items',
});

SequelizeOrderItem.belongsTo(SequelizeOrder, {
  foreignKey: 'orderId',
  as: 'order',
});

export { SequelizeOrder };