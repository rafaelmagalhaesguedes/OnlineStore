//
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeProduct extends Model<InferAttributes<SequelizeProduct>,
  InferCreationAttributes<SequelizeProduct>> {
  //
  declare id: CreationOptional<number>;

  declare name: string;

  declare price: string;

  declare priceId: string;

  declare quantity: number;

  declare image: string;
}

SequelizeProduct.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  priceId: {
    allowNull: false,
    field: 'price_id',
    type: DataTypes.STRING,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
  underscored: true,
});

export { SequelizeProduct };