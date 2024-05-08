import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeAddress extends Model<InferAttributes<SequelizeAddress>,
InferCreationAttributes<SequelizeAddress>> {
  //
  declare id: CreationOptional<number>;

  declare customerId: number;

  declare street: string;

  declare numberHouse: string;

  declare neighborhood: string;

  declare city: string;

  declare state: string;

  declare country: string;

  declare zip: string;
}

SequelizeAddress.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
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
  street: {
    type: DataTypes.STRING,
  },
  numberHouse: {
    type: DataTypes.STRING,
    field: 'number_house',
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  zip: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
  modelName: 'addresses',
  timestamps: false,
  underscored: true,
});

export { SequelizeAddress };