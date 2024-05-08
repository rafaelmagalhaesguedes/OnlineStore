import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { SequelizeProduct } from './SequelizeProduct';

class SequelizeOrderItem extends Model<InferAttributes<SequelizeOrderItem>,
  InferCreationAttributes<SequelizeOrderItem>> {
  declare id: CreationOptional<number>;

  declare orderId: number;

  declare productId: number;

  declare quantity: number;

  declare price: string;

  declare totalPrice: string;
}

SequelizeOrderItem.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
}, {
  sequelize: db,
  modelName: 'order_items',
  timestamps: false,
  underscored: true,
});

SequelizeOrderItem.belongsTo(SequelizeProduct, {
  foreignKey: 'productId',
  as: 'product',
});

SequelizeProduct.hasMany(SequelizeOrderItem, {
  foreignKey: 'productId',
  as: 'items',
});

export { SequelizeOrderItem };
