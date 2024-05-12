import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import { Product } from './Product';

class OrderItem extends Model<InferAttributes<OrderItem>,
  InferCreationAttributes<OrderItem>> {
  declare id: CreationOptional<number>;

  declare orderId: number;

  declare productId: number;

  declare quantity: number;

  declare price: string;

  declare totalPrice: string;
}

OrderItem.init({
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
    references: {
      model: 'orders',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
    references: {
      model: 'products',
      key: 'id',
    },
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
  modelName: 'items',
  timestamps: false,
  underscored: true,
});

OrderItem.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
});

Product.hasMany(OrderItem, {
  foreignKey: 'productId',
  as: 'items',
});

export { OrderItem };
